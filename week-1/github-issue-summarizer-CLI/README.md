# GitHub Issue Summarizer CLI

Summarize GitHub issues for a repository using the official GitHub MCP server and an LLM.

## Usage

```bash
issue-summarizer summarize <owner/repo> [options]
```

### Options

- `-l, --limit <number>`: Maximum number of issues to fetch (default: 10)
- `-s, --state <state>`: `open`, `closed`, or `all` (default: `open`)

## Requirements

### GitHub MCP auth

Set one of:

- `GITHUB_PERSONAL_ACCESS_TOKEN` (recommended by the GitHub MCP server)
- `GITHUB_TOKEN`

### LLM auth (Groq)

- `GROQ_API_KEY` (required)
- `GROQ_MODEL` (optional, default: `llama-3.3-70b-versatile`)

## Development

```bash
npm run dev -- summarize owner/repo
```

## Build

```bash
npm run build
npm start -- summarize owner/repo
```

