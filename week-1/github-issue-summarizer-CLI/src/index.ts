#!/usr/bin/env node
import "dotenv/config";

import { Command } from "commander";
import { summarizeCommand } from "./summarize.js";

const program = new Command();

program
  .name("issue-summarizer")
  .description("Summarize GitHub repository issues using MCP + an LLM.")
  .version("1.0.0");

program.addCommand(summarizeCommand);

program.parseAsync(process.argv).catch((err: unknown) => {
  const message = err instanceof Error ? err.message : String(err);
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
});

