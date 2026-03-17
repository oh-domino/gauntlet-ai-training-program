import { Command } from "commander";
import { z } from "zod";
import Groq from "groq-sdk";
import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";

const RepoArgSchema = z
  .string()
  .regex(/^[^/]+\/[^/]+$/, "Repository must be in the form <owner/repo>.");

const StateSchema = z.enum(["open", "closed", "all"]);

type IssueSlim = {
  number: number;
  title: string;
  body: string;
  labels: string[];
  assignees: string[];
  url?: string;
};

function truncate(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;
  return `${text.slice(0, Math.max(0, maxChars - 1))}…`;
}

function getEnv(name: string): string | undefined {
  const v = process.env[name];
  return v && v.trim().length > 0 ? v.trim() : undefined;
}

function parseRepo(ownerRepo: string): { owner: string; repo: string } {
  RepoArgSchema.parse(ownerRepo);
  const [owner, repo] = ownerRepo.split("/");
  return { owner, repo };
}

async function fetchIssuesViaMcp(args: {
  owner: string;
  repo: string;
  limit: number;
  state: z.infer<typeof StateSchema>;
}): Promise<IssueSlim[]> {
  const githubToken = getEnv("GITHUB_PERSONAL_ACCESS_TOKEN") ?? getEnv("GITHUB_TOKEN");
  if (!githubToken) {
    throw new Error(
      "Missing GitHub token. Set GITHUB_PERSONAL_ACCESS_TOKEN (recommended) or GITHUB_TOKEN so the GitHub MCP server can authenticate."
    );
  }

  const transport = new StdioClientTransport({
    command: "npx",
    args: ["-y", "@modelcontextprotocol/server-github"],
    env: {
      ...process.env,
      PATH: process.env.PATH ?? "",
      GITHUB_PERSONAL_ACCESS_TOKEN: githubToken
    }
  });

  const client = new Client({ name: "issue-summarizer", version: "1.0.0" }, { capabilities: {} });

  try {
    await client.connect(transport);

    const toolResult = await client.callTool({
      name: "list_issues",
      arguments: {
        owner: args.owner,
        repo: args.repo,
        state: args.state,
        per_page: args.limit,
        sort: "updated",
        direction: "desc"
      }
    });

    const content = (toolResult as { content?: unknown }).content as
      | Array<{ type: string; text?: string }>
      | undefined;
    const textChunks = (content ?? [])
      .filter((c: { type: string; text?: string }) => c.type === "text" && typeof c.text === "string")
      .map((c: { type: string; text?: string }) => c.text as string)
      .join("\n")
      .trim();

    if (!textChunks) return [];

    // GitHub MCP server returns JSON serialized as text content.
    const raw = JSON.parse(textChunks) as unknown;
    const arr = z.array(z.any()).parse(raw);

    return arr
      .filter((i: any) => typeof i?.number === "number" && typeof i?.title === "string")
      .map((i: any): IssueSlim => {
        const labels: string[] = Array.isArray(i.labels)
          ? i.labels
              .map((l: any) => (typeof l === "string" ? l : l?.name))
              .filter((x: any) => typeof x === "string")
          : [];

        const assignees: string[] = Array.isArray(i.assignees)
          ? i.assignees
              .map((a: any) => a?.login)
              .filter((x: any) => typeof x === "string")
          : i.assignee?.login
            ? [i.assignee.login]
            : [];

        return {
          number: i.number,
          title: i.title,
          body: typeof i.body === "string" ? i.body : "",
          labels,
          assignees,
          url: typeof i.html_url === "string" ? i.html_url : undefined
        };
      });
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    if (msg.toLowerCase().includes("not found")) {
      throw new Error(`Repository not found: ${args.owner}/${args.repo}`);
    }
    if (msg.toLowerCase().includes("econnrefused") || msg.toLowerCase().includes("enoent")) {
      throw new Error(
        "Unable to reach the GitHub MCP server (npx). Make sure npm/npx is available and try again."
      );
    }
    throw err;
  } finally {
    try {
      await client.close();
    } catch {
      // ignore
    }
  }
}

function buildPrompt(issues: IssueSlim[], ownerRepo: string): { system: string; user: string } {
  const slim = issues.map((i) => ({
    number: i.number,
    title: i.title,
    body: truncate(i.body.replace(/\s+/g, " ").trim(), 800),
    labels: i.labels,
    assignees: i.assignees
  }));

  const system = [
    "You are a senior engineering manager.",
    "Given a list of GitHub issues, produce a concise, markdown-formatted status summary.",
    "You MUST include these sections:",
    "1) Overall momentum (1-3 bullets)",
    "2) Common themes (group issues into categories like Bugs, Features, Documentation, Chores)",
    "3) Active blockers / risks",
    "4) Top next actions (3-7 bullets)",
    "Be concrete and reference issue numbers where helpful. Do not invent facts."
  ].join("\n");

  const user = `Repository: ${ownerRepo}\n\nIssues (most recently updated first):\n${JSON.stringify(
    slim,
    null,
    2
  )}`;

  return { system, user };
}

async function summarizeWithLlm(args: {
  ownerRepo: string;
  issues: IssueSlim[];
}): Promise<string> {
  const { system, user } = buildPrompt(args.issues, args.ownerRepo);

  const groqKey = getEnv("GROQ_API_KEY");
  if (!groqKey) {
    throw new Error("Missing LLM credentials. Set GROQ_API_KEY in your .env to generate summaries.");
  }

  const model = getEnv("GROQ_MODEL") ?? "llama-3.3-70b-versatile";
  const client = new Groq({ apiKey: groqKey });
  const resp = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: system },
      { role: "user", content: user }
    ],
    temperature: 0.2
  });
  return resp.choices[0]?.message?.content?.toString().trim() ?? "";
}

export const summarizeCommand = new Command("summarize")
  .argument("<owner/repo>", "Target repository (e.g., oh-domino/gauntlet-ai-training-program)")
  .option("-l, --limit <number>", "Maximum number of issues to fetch", "10")
  .option("-s, --state <state>", "Issue state to fetch: open, closed, all", "open")
  .action(async (ownerRepo: string, options: { limit: string; state: string }) => {
    const { owner, repo } = parseRepo(ownerRepo);
    const limit = z.coerce.number().int().min(1).max(100).parse(options.limit);
    const state = StateSchema.parse(options.state);

    const issues = await fetchIssuesViaMcp({ owner, repo, limit, state });
    const summary = await summarizeWithLlm({ ownerRepo, issues });

    if (!summary) {
      process.stdout.write("No summary returned by the model.\n");
      return;
    }

    process.stdout.write(`${summary}\n`);
  });

