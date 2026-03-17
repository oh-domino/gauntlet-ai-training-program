import { Client } from "@modelcontextprotocol/sdk/client";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio";

export interface SearchResultItem {
  title: string;
  snippet: string;
  url: string;
}

export interface SearchResults {
  items: SearchResultItem[];
}

export class BraveMcpClient {
  constructor(private readonly apiKey: string) {}

  async searchX(topic: string, limit: number): Promise<SearchResults> {
    const query = `${topic} site:twitter.com`;

    // 1. Get the raw text string from Brave
    const rawText = await this.invokeBraveSearchTool({
      query,
      count: limit
    });

    // 2. Trick the CLI by stuffing that giant string into a single item
    // This way, we don't have to manually rewrite index.ts!
    const items: SearchResultItem[] = [
      {
        title: "Raw X.com Results",
        snippet: typeof rawText === "string" ? rawText : JSON.stringify(rawText),
        url: `https://twitter.com/search?q=${encodeURIComponent(query)}`
      }
    ];

    return { items };
  }

  private async invokeBraveSearchTool(args: { query: string; count: number }): Promise<string> {
    const npxCommand = process.platform === "win32" ? "npx.cmd" : "npx";

    const transport = new StdioClientTransport({
      command: npxCommand,
      args: ["@modelcontextprotocol/server-brave-search"],
      env: {
        ...process.env,
        BRAVE_API_KEY: this.apiKey
      },
      stderr: "pipe"
    });

    const stderrStream = transport.stderr;
    if (stderrStream) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (stderrStream as any).setEncoding?.("utf8");
      stderrStream.on("data", (chunk: unknown) => {
        const text = String(chunk);
        console.error(`[Brave MCP stderr] ${text.trimEnd()}`);
      });
    }
    const client = new Client({ name: "x-trend-analyzer", version: "1.0.0" }, {});

    try {
      await client.connect(transport as any);

      console.log(`🔍 Sending query to Brave: ${args.query}`);
      const toolResult: any = await client.callTool({
        name: "brave_web_search",
        arguments: {
          query: args.query,
          count: args.count
        }
      });

      // 3. NEW FIX: Just grab the raw string directly and return it. No JSON parsing!
      const firstContent = toolResult?.content?.[0];
      if (firstContent && firstContent.text) {
        return firstContent.text as string;
      }
      return "";
      
    } finally {
      try {
        // @ts-expect-error
        await client.close();
      } catch {}
      try {
        await transport.close();
      } catch {}
    }
  }
}

