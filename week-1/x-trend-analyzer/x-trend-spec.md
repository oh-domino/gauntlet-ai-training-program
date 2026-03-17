# Product Spec: "Signal-to-Noise" X.com Trend Analyzer

## 1. Overview
The X-Trend Analyzer is a Node.js CLI tool that cuts through social media noise. It takes a technology keyword, uses an MCP Search server to find recent discussions on X.com (Twitter), and passes the raw data to a fast LLM (Groq) with a strict prompt to filter out "engagement bait" and only return high-signal, actionable developer insights.

## 2. Goals & Mission
- **MCP Integration:** Connect to a Web Search MCP server (e.g., Brave Search) to fetch real-time web data from X.com.
- **Advanced Prompt Engineering:** Use a complex system prompt to force the LLM to differentiate between "hype/marketing" and "actual technical insight".
- **Spec-Driven Dev:** Generate the app entirely using AI based on this document.

## 3. Tech Stack
- **Runtime:** Node.js
- **Language:** TypeScript
- **CLI Framework:** Commander.js
- **Protocol:** MCP Client (connecting to a Web Search MCP tool)
- **AI Integration:** Groq SDK (Model: `llama-3.3-70b-versatile`)

## 4. Core Features & Commands
The CLI will expose a single command: `analyze`

**Usage:**
```bash
x-trend analyze "<topic>" [options]
```

**Arguments:**
- `<topic>`: The technology or trend to analyze (e.g., "Agentic AI", "React Server Components").

**Options:**
- `-l, --limit <number>`: Number of search results to fetch (default: 20).

## 5. System Flow
1. **Input Parsing:** CLI reads the topic keyword.
2. **Query Construction:** The CLI formats a search query: `site:x.com "<topic>"`.
3. **MCP Tool Call:** The CLI acts as an MCP client, invoking the search tool on the configured Search MCP server (e.g., Brave Search) to fetch recent posts.
4. **Data Formatting:** The JSON search results (titles, snippets, URLs) are mapped into a readable string format.
5. **LLM Filtering (The Core Logic):** The data is sent to Groq with a system prompt that explicitly instructs the model to:
   - IGNORE engagement bait (e.g., "Drop a 🚀 if you agree", "A thread 🧵").
   - IGNORE generic hype ("AI is the future").
   - EXTRACT specific tools, repositories, pain points, or coding techniques mentioned.
   - Summarize the *actual* technical discourse happening right now.
6. **Output:** A clean, Markdown-formatted report prints to the terminal.

## 6. Acceptance Criteria
- [ ] The CLI successfully connects to an external Search MCP server.
- [ ] It fetches data specifically from `x.com`.
- [ ] The Groq LLM response strictly follows the anti-hype system prompt.
- [ ] Output is neatly categorized into "Signal" (real insights) and "Noise Removed" (brief summary of the hype it ignored).
- [ ] The codebase is fully typed and handles network/API errors gracefully.