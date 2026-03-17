# Product Spec: GitHub Issue Summarizer CLI

## 1. Overview
The GitHub Issue Summarizer is a Node.js command-line interface (CLI) tool. It leverages the Model Context Protocol (MCP) to securely connect to GitHub, fetch issues for a specified repository, and uses an LLM to generate a concise summary of the current project state, active blockers, and common themes.

## 2. Goals & Mission
- **Demonstrate MCP Integration:** Successfully connect to the official GitHub MCP server to read repository data without manually handling GitHub API authentication in the core app logic.
- **AI-First Workflow:** Build the tool entirely based on this specification using an AI coding assistant (Cursor/Claude).
- **Utility:** Provide developers with a quick "state of the repo" terminal output.

## 3. Tech Stack
- **Runtime:** Node.js
- **Language:** TypeScript
- **CLI Framework:** Commander.js (or similar)
- **Protocol:** Model Context Protocol (MCP) Client
- **AI Integration:** OpenAI / Anthropic SDK (for summarization)

## 4. Core Features & Commands
The CLI will expose a primary command: `summarize`

**Usage:**
```bash
issue-summarizer summarize <owner/repo> [options]
```

**Arguments:**
- `<owner/repo>`: The target GitHub repository (e.g., `oh-domino/gauntlet-ai-training-program`).

**Options:**
- `-l, --limit <number>`: Maximum number of issues to fetch (default: 10).
- `-s, --state <state>`: State of the issues to fetch (`open`, `closed`, `all` - default: `open`).

## 5. System Flow
1. **Input Parsing:** CLI receives the target repository and options.
2. **MCP Tool Call:** The application acts as an MCP client, invoking the `get_issues` (or equivalent) tool on the GitHub MCP server.
3. **Data Formatting:** The JSON response from GitHub is stripped down to essential fields (Title, Body, Labels, Assignee) to fit within context windows.
4. **LLM Summarization:** The stripped data is sent to an LLM with a system prompt asking to categorize the issues (e.g., Bugs, Features, Documentation) and summarize the overall momentum of the repository.
5. **Output:** The markdown-formatted summary is rendered directly in the user's terminal.

## 6. Acceptance Criteria
- [ ] A user can run the CLI with a repo name and get a structured summary back.
- [ ] The app connects to the GitHub MCP server rather than implementing custom `fetch` calls to the GitHub REST API.
- [ ] The codebase is fully typed with TypeScript.
- [ ] The CLI provides helpful error messages if the repository doesn't exist or the MCP server is unreachable.
