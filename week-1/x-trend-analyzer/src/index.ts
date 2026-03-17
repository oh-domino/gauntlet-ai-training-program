#!/usr/bin/env node
import "dotenv/config";
import { Command } from "commander";
import { BraveMcpClient } from "./mcpClient";
import { GroqTrendAnalyzer } from "./groqAnalyzer";

const program = new Command();

program
  .name("x-trend")
  .description("Signal-to-noise X.com (Twitter) trend analyzer for developers")
  .version("1.0.0");

program
  .command("analyze")
  .description("Analyze real technical discourse about a topic on X.com")
  .argument("<topic>", "Technology or trend to analyze, e.g. 'Agentic AI'")
  .option("-l, --limit <number>", "Number of search results to fetch", "20")
  .action(async (topic: string, options: { limit: string }) => {
    const limit = Number.parseInt(options.limit, 10);
    if (Number.isNaN(limit) || limit <= 0) {
      console.error("Error: --limit must be a positive integer.");
      process.exitCode = 1;
      return;
    }

    const braveApiKey = process.env.BRAVE_API_KEY;
    const groqApiKey = process.env.GROQ_API_KEY;

    if (!braveApiKey) {
      console.error("Error: BRAVE_API_KEY is not set. Please define it in your environment or .env file.");
      process.exitCode = 1;
      return;
    }

    if (!groqApiKey) {
      console.error("Error: GROQ_API_KEY is not set. Please define it in your environment or .env file.");
      process.exitCode = 1;
      return;
    }

    const mcpClient = new BraveMcpClient(braveApiKey);
    const analyzer = new GroqTrendAnalyzer(groqApiKey);

    try {
      console.log(`\n🔍 Fetching recent X.com posts for topic: "${topic}"...`);
      const searchResults = await mcpClient.searchX(topic, limit);

      console.log(`✅ Retrieved ${searchResults.items.length} results. Analyzing with Groq...\n`);
      const analysis = await analyzer.analyze(topic, searchResults);

      const output = [
        `# X-Trend Analyzer Report`,
        ``,
        `**Topic:** ${topic}`,
        ``,
        `## Signal`,
        analysis.signal || "_No high-signal insights detected._",
        ``,
        `## Noise Removed`,
        analysis.noiseRemoved
      ].join("\n");

      console.log(output);
    } catch (error) {
      console.error("\nAn error occurred while analyzing the trend.");
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.error(error);
      }
      process.exitCode = 1;
    }
  });

program.parseAsync(process.argv).catch((error) => {
  console.error("Unexpected CLI error:", error);
  process.exit(1);
});

