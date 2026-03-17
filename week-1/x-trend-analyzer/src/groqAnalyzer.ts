import Groq from "groq-sdk";
import type { SearchResults } from "./mcpClient";

export interface AnalysisSections {
  signal: string;
  noiseRemoved: string;
}

export class GroqTrendAnalyzer {
  private readonly client: Groq;

  constructor(apiKey: string) {
    this.client = new Groq({ apiKey });
  }

  async analyze(topic: string, results: SearchResults): Promise<AnalysisSections> {
    const formattedSources = this.formatResults(results);

    const systemPrompt = this.buildSystemPrompt();

    const completion = await this.client.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: `Topic: ${topic}\n\nRecent X.com discourse:\n\n${formattedSources}`
        }
      ]
    });

    const content = completion.choices[0]?.message?.content;
    let text = "";
    if (typeof content === "string") {
      text = content;
    } else if (Array.isArray(content)) {
      text = (content as Array<unknown>)
        .map((part: unknown) => {
          if (typeof part === "string") {
            return part;
          }
          if (part && typeof part === "object" && "text" in (part as Record<string, unknown>)) {
            const candidate = (part as Record<string, unknown>).text;
            if (typeof candidate === "string") {
              return candidate;
            }
          }
          return "";
        })
        .join("");
    }

    const sections = this.extractSections(text);
    return sections;
  }

  private formatResults(results: SearchResults): string {
    if (!results.items.length) {
      return "_No results returned from search._";
    }

    return results.items
      .map(
        (item, idx) =>
          `### Item ${idx + 1}\nTitle: ${item.title}\nURL: ${item.url}\nSnippet:\n${item.snippet}\n`
      )
      .join("\n");
  }

  private buildSystemPrompt(): string {
    return [
      "You are an expert developer trend analyst.",
      "You read recent posts from X.com (Twitter) about a technology topic and separate hype from real technical signal.",
      "",
      "Your tasks:",
      "- IGNORE engagement bait (e.g., \"Drop a 🚀 if you agree\", \"A thread 🧵\", giveaways, follower-grabs).",
      "- IGNORE generic hype or vague futurism (e.g., \"AI is the future\", \"This will change everything\").",
      "- EXTRACT specific tools, repositories, libraries, frameworks, and concrete coding techniques mentioned.",
      "- EXTRACT recurring pain points, failure modes, and nuanced opinions from practitioners.",
      "- Summarize the *actual* technical discourse happening right now, as if briefing a senior engineer.",
      "",
      "Output format (Markdown):",
      "",
      "## Signal",
      "- Bullet points capturing only concrete, actionable, technically specific insights.",
      "- Prefer including links or repo names when they appear reliable.",
      "",
      "## Noise Removed",
      "- 3–8 bullet points that briefly describe the categories of hype, engagement bait, or shallow content you ignored.",
      "- Do NOT copy the original text; summarize the patterns.",
      "",
      "Be strict: if something is not technically useful on its own, treat it as noise."
    ].join("\n");
  }

  private extractSections(text: string): AnalysisSections {
    const signalMatch = /##\s*Signal([\s\S]*?)(?=##\s*Noise Removed|$)/i.exec(text);
    const noiseMatch = /##\s*Noise Removed([\s\S]*)/i.exec(text);

    return {
      signal: signalMatch ? signalMatch[1].trim() : text.trim(),
      noiseRemoved: noiseMatch ? noiseMatch[1].trim() : "_Model did not explicitly provide a Noise Removed section._"
    };
  }
}

