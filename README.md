# 🏋️ Personal AI Engineering Training Program — 10 Weeks

### *Inspired by the [Gauntlet AI](https://gauntletai.com/) Curriculum*

> **Philosophy:** You don't just *use* AI — you **build with AI as your co-engineer**. Every week escalates in complexity. Spec-driven development. Ship real systems. By Week 10, you're building things that would have been unimaginable at Week 1.

**Two Phases. Escalating Complexity.**

| | Phase | Weeks | Format | Focus |
|---|---|---|---|---|
| 🔷 | **Phase 1** | 1–3 | Remote / Solo | AI-first foundations, RAG, agents |
| 🔶 | **Phase 2** | 4–10 | Intensive | Real-world delivery, enterprise systems, capstone |

**Recommended commitment:** 30–50 hrs/week (scale up if you can; Gauntlet does 80–100 hrs)

---

## 📂 Repository Structure

```
gauntlet-ai-training-program/
├── README.md                          ← You are here
├── CONTRIBUTING.md                    ← How to use this repo
├── LICENSE                            ← MIT
├── .gitignore
├── assessment/
│   ├── pre-program-assessment.md      ← Fill out before starting
│   └── weekly-reflection-template.md  ← Copy each week
├── templates/
│   ├── project-spec-template.md       ← Use for every project
│   ├── eval-suite-template.md         ← Use for every eval
│   └── blog-post-template.md          ← Use for weekly blog posts
├── .github/
│   └── ISSUE_TEMPLATE/
│       ├── weekly-progress.yml
│       ├── project-submission.yml
│       └── bug-or-blocker.yml
└── weeks/
    ├── week-01-ai-first-coding/
    │   ├── README.md
    │   ├── projects/
    │   ├── notes/
    │   └── blog/
    ├── week-02-legacy-systems-rag/
    │   ├── README.md
    │   ├── projects/
    │   ├── notes/
    │   └── blog/
    ├── week-03-domain-specific-agents/
    ├── week-04-project-delivery-1/
    ├── week-05-project-delivery-2/
    ├── week-06-enterprise-fine-tuning/
    ├── week-07-legacy-modernization-multi-agent/
    ├── week-08-multimodal-ai/
    ├── week-09-capstone-infrastructure/
    └── week-10-capstone-rl/
```

---

## 🔷 PHASE 1: Remote · Weeks 1–3

*An immersive launch into AI-first engineering — learn to build, iterate, and ship at speed through intelligent workflows and guided collaboration.*

---

### Week 1: AI-First Coding Methodologies

> *Establish core workflows, coding alongside intelligent agents and accelerating creation through AI collaboration.*

#### Technical Focus

- [ ] AI-first development workflows — how to think, plan, and code *with* AI from minute one
- [ ] **Coding agents:** Claude Code, Cursor (Agent mode), OpenAI Codex
- [ ] **Model Context Protocol (MCP):** Understand the "USB-C of AI" — how MCP servers/clients let agents interact with tools, APIs, databases, and file systems through a universal protocol
- [ ] **Spec-driven development:** Write specs first → AI generates plans → AI generates code → you review & iterate
- [ ] Canvas-based systems (visual AI collaboration interfaces)
- [ ] Real-time AI collaboration workflows

#### Tools

Claude Code, Cursor, OpenAI Codex, MCP integrations (GitHub MCP server, filesystem MCP, database MCP), GitHub Spec Kit or Spec Kitty

#### Resources

- [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)
- [Cursor Docs](https://docs.cursor.com/)

#### 🛠 Project: Spec-Driven Project Scaffolding Tool

Build a **spec-driven project scaffolding tool** using MCP. Write a formal spec, then use Claude Code or Cursor to implement a CLI that:

- [ ] Takes a project spec (markdown) as input
- [ ] Connects to GitHub via MCP to create a repo, issues, and project board
- [ ] Generates the project skeleton and pushes initial code
- [ ] Demonstrates real-time collaboration between you and the AI agent

#### ✅ Methodology Checkpoint

By end of week, you should never start coding without a spec. AI is your pair programmer, not your autocomplete.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 2: Legacy Systems & RAG Implementation

> *Apply AI-first workflows to unfamiliar and enterprise-scale codebases. Connect live information with reasoning systems to modernize and extend existing software.*

#### Technical Focus

- [ ] **RAG (Retrieval-Augmented Generation):** Full pipeline — ingestion, chunking, embedding, retrieval, generation
- [ ] Vector databases: Pinecone, Weaviate, Qdrant
- [ ] Embedding models and strategies (semantic vs. keyword, hybrid search, reranking)
- [ ] Retrieval pipeline design and optimization
- [ ] **Working with legacy/enterprise systems:** Navigating unfamiliar, large codebases using AI
- [ ] Adapting AI-first workflows to legacy constraints

#### Tools

Vector databases (Pinecone, Weaviate, Qdrant, Chroma), RAG frameworks (LangChain, LlamaIndex), Claude Code / Cursor for codebase exploration

#### Resources

- [RAG From Scratch — LangChain YouTube series](https://youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x)
- [LlamaIndex Docs](https://docs.llamaindex.ai/)
- [Pinecone Learning Center](https://www.pinecone.io/learn/)

#### 🛠 Project: RAG-Powered Codebase Assistant

Find a real **open-source legacy codebase** (e.g., an older Django/Rails/Java project with 50k+ lines). Build a **RAG-powered codebase assistant** that:

- [ ] Indexes the entire codebase into a vector database
- [ ] Answers natural language questions about architecture, dependencies, and business logic
- [ ] Can suggest modernization paths (e.g., "How would I migrate this from Python 2 to 3?")
- [ ] Includes a retrieval evaluation pipeline to measure retrieval quality

#### ✅ Methodology Checkpoint

You can select the right RAG architecture for a given problem. You can adapt AI-first workflows to codebases you've never seen before.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 3: Open Source Domain-Specific AI Agents

> *Design and ship production-ready AI agents for real-world domains, emphasizing reliability, evaluation, and system-level thinking.*

#### Technical Focus

- [ ] **Agent frameworks:** LangGraph, CrewAI, Autogen
- [ ] Agent design patterns: ReAct, tool-use, planning, reflection
- [ ] **Evals and verification:** How to systematically test and measure agent performance
- [ ] **Observability:** Tracing, logging, debugging agent behavior (LangSmith, Braintrust)
- [ ] Agent-to-agent protocols and communication
- [ ] Agent reliability and failure handling

#### Tools

LangGraph, CrewAI, LangSmith, Braintrust (evaluation & observability), MCP for agent-tool integrations

#### Resources

- [LangGraph Agent Tutorials](https://langchain-ai.github.io/langgraph/tutorials/)
- [CrewAI Docs](https://docs.crewai.com/)
- [LangSmith Docs](https://docs.smith.langchain.com/)
- [DeepEval Docs](https://docs.deepeval.com/)

#### 🛠 Project: Domain-Specific AI Agent (Open Source)

Build and **open-source** a **domain-specific AI agent** (choose a real domain: DevOps, legal research, financial analysis, medical literature, etc.) that:

- [ ] Uses multiple tools via MCP
- [ ] Has a structured evaluation suite (at least 50 test cases with pass/fail criteria)
- [ ] Includes full observability (traces, token usage, latency metrics)
- [ ] Is published to GitHub with proper docs, README, and CI/CD
- [ ] Demonstrates systematic agent development with eval-driven iteration

#### ✅ Methodology Checkpoint

You don't ship agents without evals. You can trace and debug agent failures. You think in systems, not prompts.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

## 🔶 PHASE 2: Intensive · Weeks 4–10

*Develop into a system-level AI engineer focused on delivery, reliability, and operating in real enterprise environments.*

---

### Week 4: Real-World Project Delivery I

> *Execute real projects, translating ambiguous requirements into production-ready systems under professional constraints.*

#### Technical Focus

- [ ] Translating ambiguous, real-world problems into technical specs
- [ ] Professional delivery standards (code quality, documentation, testing)
- [ ] End-to-end deployment (CI/CD, Docker, cloud)
- [ ] Client/stakeholder collaboration simulation

#### Tools

Full AI-first workflow stack (Claude Code, Cursor, MCP), project-dependent tooling

#### 🛠 Project: 2 Real-World Deliverables

Pick **2 real-world problems** from one of these sources and deliver production-ready solutions:

1. **Open-source bounties** (e.g., from GitHub Sponsors, Algora, Boss.dev)
2. **Freelance-style projects** (e.g., Upwork AI project descriptions — don't take the job, just build the solution)
3. **Non-profit or community needs** (build something for a local org, open-source project, or community)

Each project must include:

- [ ] A written spec (before coding)
- [ ] Deployed, working product
- [ ] Documentation and README
- [ ] Test suite

#### ✅ Methodology Checkpoint

You can scope ambiguous work, deliver professionally, and ship under constraints.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 5: Real-World Project Delivery II

> *Speed, quality, and consistency. Deliver additional projects using refined AI-first methodologies.*

#### Technical Focus

- [ ] Rapid delivery and time-boxing
- [ ] Tool selection optimization (knowing when to use which AI tool)
- [ ] AI-assisted quality assurance (using AI to review, test, and validate)
- [ ] Workflow refinement — measuring and improving your own AI-first development speed

#### Tools

Full AI development stack and project-specific technologies

#### 🛠 Project: 2 Time-Boxed Deliverables + Retrospective

Deliver **2 more real-world projects** (same sourcing as Week 4), but now with **strict time constraints:**

- [ ] Project 1: Scoped and delivered in ≤ 3 days
- [ ] Project 2: Scoped and delivered in ≤ 3 days
- [ ] Write a retrospective blog post comparing your Week 4 vs Week 5 delivery speed and quality

#### ✅ Methodology Checkpoint

You're measurably faster. Your AI-first workflow is a competitive advantage, not a crutch.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 6: Enterprise Systems & Fine-Tuning

> *Work with large-scale systems, adapting and deploying fine-tuned models within enterprise constraints.*

#### Technical Focus

- [ ] Enterprise architecture patterns for AI systems
- [ ] **Supervised fine-tuning:** When and why to fine-tune vs. prompt engineer vs. RAG
- [ ] **PEFT, LoRA, QLoRA:** Parameter-efficient fine-tuning of open-source models
- [ ] Dataset curation and preparation
- [ ] Model evaluation and benchmarking
- [ ] Deploying fine-tuned models in production

#### Tools

HuggingFace Transformers + PEFT, Axolotl, Unsloth (fine-tuning frameworks), OpenAI fine-tuning API, Enterprise debugging and deployment tools (Docker, K8s basics)

#### Resources

- [HuggingFace PEFT Docs](https://huggingface.co/docs/peft)
- [Axolotl](https://github.com/OpenAccess-AI-Collective/axolotl)
- [OpenAI Fine-Tuning Guide](https://platform.openai.com/docs/guides/fine-tuning)

#### 🛠 Project: Enterprise-Grade Fine-Tuned AI System

- [ ] Identify a domain where base models underperform
- [ ] Curate a training dataset (minimum 500 high-quality examples)
- [ ] Fine-tune using LoRA/QLoRA on an open-source model AND using OpenAI's fine-tuning API
- [ ] Benchmark fine-tuned vs. base model vs. RAG approach with rigorous evals
- [ ] Deploy the winning model behind an API with monitoring

#### ✅ Methodology Checkpoint

You understand the fine-tuning decision tree and can integrate custom models into production enterprise systems.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 7: Legacy Modernization & Multi-Agent Systems

> *Modern AI meets legacy software. Coordinate agent teams to refactor, extend, and modernize complex codebases.*

#### Technical Focus

- [ ] **Multi-agent systems:** Supervisor agents, worker agents, agent coordination patterns
- [ ] Agent orchestration frameworks
- [ ] **Modernization pipelines:** Using agent teams to systematically refactor legacy code
- [ ] MCP for multi-agent coordination
- [ ] Managing and reducing system complexity with agents

#### Tools

LangGraph (multi-agent), CrewAI, MCP for agent-tool and agent-agent communication, evaluation and debugging tools

#### 🛠 Project: Multi-Agent Modernization Pipeline

Take a **real legacy open-source project** and build a **multi-agent modernization pipeline:**

- [ ] **Analyzer Agent:** Maps codebase architecture, identifies tech debt and dependency issues
- [ ] **Planner Agent:** Creates a prioritized modernization plan
- [ ] **Refactor Agent(s):** Execute refactoring tasks (one agent per concern — security, performance, code style)
- [ ] **Reviewer Agent:** Reviews all changes for correctness and regression
- [ ] **Coordinator/Supervisor Agent:** Orchestrates the team, resolves conflicts, manages order of operations
- [ ] Submit actual PRs to the open-source project (or fork)
- [ ] Document the full pipeline

#### ✅ Methodology Checkpoint

You can orchestrate agent teams to tackle problems too large for any single agent. You think at the system level.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 8: Multimodal AI & Rapid Domain Learning

> *Rapidly learn new domains using AI, combining text, image, audio, and interactive systems into complete experiences.*

#### Technical Focus

- [ ] **Multimodal AI:** Vision models, image generation, voice/audio synthesis
- [ ] Image and video generation pipelines
- [ ] Voice and audio AI (TTS, STT, voice cloning)
- [ ] Cross-modal system integration
- [ ] AI-accelerated learning of unfamiliar domains (e.g., game development)

#### Tools

Eleven Labs (voice), Replicate, Midjourney, Stable Diffusion, OpenAI Vision (GPT-4o), Claude Vision, Game engines (Godot, Unity basics) or interactive frameworks

#### Resources

- [Eleven Labs Docs](https://elevenlabs.io/docs)
- [Replicate Docs](https://replicate.com/docs)
- [OpenAI Vision Guide](https://platform.openai.com/docs/guides/vision)

#### 🛠 Project: Multimodal Interactive Experience

Choose one:

**Option A: AI Game**
- [ ] Use AI to rapidly learn game development (a domain you likely don't know)
- [ ] Build a game with AI-generated art, AI voice acting, and AI-powered NPC system using LLMs
- [ ] Ship a playable demo

**Option B: Multimodal AI Assistant**
- [ ] Build a system that processes images, generates images, handles voice input/output
- [ ] Integrate all modalities into a unified conversational experience
- [ ] Deploy it publicly

#### ✅ Methodology Checkpoint

You can use AI to rapidly learn unfamiliar domains. You can integrate multiple AI modalities into a cohesive system.

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 9: Capstone Development & AI Infrastructure

> *Design scalable AI systems while beginning capstone development.*

#### Technical Focus

- [ ] **Scaling agents:** Running agents reliably at scale
- [ ] **Scaling MCPs:** Building and managing MCP server infrastructure
- [ ] Agent protocols for production systems
- [ ] Monitoring, logging, and infrastructure for AI systems
- [ ] Cloud deployment patterns for AI workloads

#### Tools

Cloud platforms (AWS, GCP, or Azure), MCP protocol implementations, observability systems (Datadog, Grafana, LangSmith), Docker, Kubernetes basics

#### 🛠 Project: Capstone — Part 1

Begin your **capstone project** — a comprehensive AI system that demonstrates mastery across the full curriculum. This week, focus on:

- [ ] Write the full capstone spec (using spec-driven development)
- [ ] Design the system architecture (including MCP integrations, agent orchestration, infrastructure)
- [ ] Build and deploy the core infrastructure (cloud deployment, monitoring, MCP servers)
- [ ] Begin core feature implementation

**Capstone Requirements:**

- [ ] Must use at least **5 techniques** from the program (MCP, agents, RAG, fine-tuning, multimodal, evals, multi-agent, etc.)
- [ ] Must be deployed and publicly accessible
- [ ] Must include monitoring and observability
- [ ] Must be open-sourced with full documentation
- [ ] Must include a comprehensive eval suite

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

### Week 10: Capstone Completion & Reinforcement Learning

> *Complete and deploy a comprehensive AI system capable of learning, adaptation, and real-world optimization.*

#### Technical Focus

- [ ] **Reinforcement learning:** RL environments, reward design, training loops
- [ ] Advanced agent capabilities (self-improvement, adaptation)
- [ ] Performance optimization for AI systems
- [ ] End-to-end system delivery and presentation

#### Tools

RL frameworks (Gymnasium, Stable-Baselines3, RLlib), full AI deployment pipelines, presentation tools

#### Resources

- [Gymnasium (OpenAI Gym successor)](https://gymnasium.farama.org/)
- [Stable-Baselines3 Docs](https://stable-baselines3.readthedocs.io/)
- [Spinning Up in Deep RL (OpenAI)](https://spinningup.openai.com/)

#### 🛠 Project: Capstone — Part 2 (Final Delivery)

- [ ] **Add an RL component** to your capstone — an element that learns, adapts, and optimizes over time
- [ ] **Complete all features**, testing, documentation
- [ ] **Deploy to production** with full monitoring
- [ ] **Create a demo video** (5–10 min) walking through the system
- [ ] **Write a technical blog post** documenting architecture decisions, trade-offs, and lessons learned
- [ ] **Present your capstone** (record yourself giving a 15-min technical presentation as if to a hiring panel)

#### Daily Log

| Day | Hours | What I Worked On | What I Shipped | Blockers |
|-----|-------|------------------|----------------|----------|
| Mon | | | | |
| Tue | | | | |
| Wed | | | | |
| Thu | | | | |
| Fri | | | | |
| Sat | | | | |
| Sun | | | | |

---

## 📋 Weekly Habits (Every Week)

| Habit | Details |
|-------|---------|
| 📝 **Write specs before code** | Every project starts with a spec. No exceptions. |
| 🤖 **Code with AI agents** | Claude Code, Cursor, or Codex should be your constant co-pilot |
| 🔌 **Use MCP integrations** | Practice connecting agents to real tools and data sources |
| 📊 **Eval everything** | No agent or AI system ships without measurable evaluation |
| 📖 **Read 2–3 papers/articles** | Stay current (Latent Space podcast, Simon Willison's blog, arXiv) |
| 🧑‍💻 **Push code daily** | Maintain your GitHub streak — everything is open source |
| ✍️ **Weekly blog post** | Document what you built, what you learned, what broke |
| 🤝 **Community engagement** | Contribute to open-source AI repos, engage in Discord communities |

---

## 🧰 Toolbox

| Category | Tools |
|----------|-------|
| **AI Coding Agents** | Claude Code, Cursor, OpenAI Codex |
| **MCP** | MCP servers (GitHub, filesystem, DB), custom MCP implementations |
| **Spec-Driven Dev** | GitHub Spec Kit, Spec Kitty |
| **LLM APIs** | OpenAI (GPT-4o), Anthropic (Claude), Google (Gemini) |
| **Agent Frameworks** | LangGraph, CrewAI, Autogen |
| **RAG & Vector DBs** | Pinecone, Weaviate, Qdrant, Chroma, LlamaIndex |
| **Fine-Tuning** | HuggingFace PEFT, Axolotl, Unsloth, OpenAI Fine-Tuning |
| **Multimodal** | Eleven Labs, Replicate, Stable Diffusion, Midjourney |
| **RL** | Gymnasium, Stable-Baselines3, RLlib |
| **Observability** | LangSmith, Braintrust, Datadog, Weights & Biases |
| **Deployment** | Docker, AWS/GCP, Vercel, Railway |

---

## 🎯 Graduation Criteria

By Week 10, you should be able to demonstrate:

- [ ] **AI-first workflow mastery** — You code with AI agents, not just AI suggestions
- [ ] **MCP fluency** — You can build and integrate MCP servers for any tool or data source
- [ ] **Spec-driven development** — Every project starts with a spec; AI executes from specs
- [ ] **RAG expertise** — You can build production RAG pipelines and evaluate them rigorously
- [ ] **Agent engineering** — You can design, build, evaluate, and debug autonomous agents
- [ ] **Multi-agent orchestration** — You can coordinate agent teams to solve complex problems
- [ ] **Fine-tuning competency** — You know when and how to fine-tune models for production
- [ ] **Multimodal integration** — You can build systems spanning text, vision, audio
- [ ] **Enterprise readiness** — You can work with legacy systems and deploy at scale
- [ ] **RL fundamentals** — You can add learning and adaptation to AI systems
- [ ] **10+ shipped projects** on GitHub with docs, evals, and deployment
- [ ] **A capstone system** that would impress any AI engineering hiring panel

---

## 📌 How to Use This Repo

1. **Start** by filling out `assessment/pre-program-assessment.md`
2. **Each week**, work through the weekly README in `weeks/week-XX-*/README.md`
3. **Use the templates** in `templates/` for every project spec, eval suite, and blog post
4. **Track daily progress** in each week's Daily Log table
5. **Check off items** as you complete them — the checkboxes are your progress tracker
6. **Copy** `assessment/weekly-reflection-template.md` each week for your reflection
7. **Push code daily** — your GitHub profile is your portfolio

---

*Built with 💪 and AI. Let's go.*
