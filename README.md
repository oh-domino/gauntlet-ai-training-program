# 🏋️ Personal AI Engineering Training Program — 10 Weeks
### *Inspired by the Gauntlet AI Curriculum*

**Philosophy:** You don't just *use* AI — you **build with AI as your co-engineer**. Every week escalates in complexity. Spec-driven development. Ship real systems. By Week 10, you're building things that would have been unimaginable at Week 1.

**Two Phases. Escalating Complexity.**

**Recommended commitment:** 30–50 hrs/week (scale up if you can; Gauntlet does 80–100 hrs)

---

## Program Overview

| Week | Topic | Phase |
|------|-------|-------|
| 1 | AI-First Coding Methodologies | Phase 1: Remote |
| 2 | Legacy Systems & RAG Implementation | Phase 1: Remote |
| 3 | Open Source Domain-Specific AI Agents | Phase 1: Remote |
| 4 | Real-World Project Delivery I | Phase 2: Intensive |
| 5 | Real-World Project Delivery II | Phase 2: Intensive |
| 6 | Enterprise Systems & Fine-Tuning | Phase 2: Intensive |
| 7 | Legacy Modernization & Multi-Agent Systems | Phase 2: Intensive |
| 8 | Multimodal AI & Rapid Domain Learning | Phase 2: Intensive |
| 9 | Capstone Development & AI Infrastructure | Phase 2: Intensive |
| 10 | Capstone Completion & Reinforcement Learning | Phase 2: Intensive |

---

## 🔷 PHASE 1: Remote · Weeks 1–3
*An immersive launch into AI-first engineering — learn to build, iterate, and ship at speed through intelligent workflows and guided collaboration.*

---

### Week 1: AI-First Coding Methodologies
> *Establish core workflows, coding alongside intelligent agents and accelerating creation through AI collaboration.*

**Technical Focus:**
- AI-first development workflows — how to think, plan, and code *with* AI from minute one
- **Coding agents:** Claude Code, Cursor (Agent mode), OpenAI Codex
- **Model Context Protocol (MCP):** Understand the "USB-C of AI" — how MCP servers/clients let agents interact with tools, APIs, databases, and file systems through a universal protocol
- **Spec-driven development:** Write specs first → AI generates plans → AI generates code → you review & iterate
- Canvas-based systems (visual AI collaboration interfaces)
- Real-time AI collaboration workflows

**Tools:** Claude Code, Cursor, OpenAI Codex, MCP integrations (GitHub MCP server, filesystem MCP, database MCP), GitHub Spec Kit or Spec Kitty

**Resources:**
- [Model Context Protocol Docs](https://modelcontextprotocol.io/)
- [GitHub Spec Kit](https://github.com/github/spec-kit)
- [Claude Code Docs](https://docs.anthropic.com/en/docs/claude-code)
- [Cursor Docs](https://docs.cursor.com/)

**🛠 Project:** Build a **spec-driven project scaffolding tool** using MCP.

📁 [Week 1 Details & Checklist →](weeks/week-01-ai-first-coding/README.md)

---

### Week 2: Legacy Systems & RAG Implementation
> *Apply AI-first workflows to unfamiliar and enterprise-scale codebases. Connect live information with reasoning systems to modernize and extend existing software.*

**Technical Focus:**
- **RAG (Retrieval-Augmented Generation):** Full pipeline — ingestion, chunking, embedding, retrieval, generation
- Vector databases: Pinecone, Weaviate, Qdrant
- Embedding models and strategies (semantic vs. keyword, hybrid search, reranking)
- Retrieval pipeline design and optimization
- **Working with legacy/enterprise systems:** Navigating unfamiliar, large codebases using AI
- Adapting AI-first workflows to legacy constraints

**Tools:** Vector databases (Pinecone, Weaviate, Qdrant, Chroma), RAG frameworks (LangChain, LlamaIndex), Claude Code / Cursor

**Resources:**
- [RAG From Scratch — LangChain series](https://youtube.com/playlist?list=PLfaIDFEXuae2LXbO1_PKyVJiQ23ZztA0x)
- [LlamaIndex Docs](https://docs.llamaindex.ai/)
- [Pinecone Learning Center](https://www.pinecone.io/learn/)

**🛠 Project:** Build a **RAG-powered legacy codebase assistant**.

📁 [Week 2 Details & Checklist →](weeks/week-02-legacy-systems-rag/README.md)

---

### Week 3: Open Source Domain-Specific AI Agents
> *Design and ship production-ready AI agents for real-world domains, emphasizing reliability, evaluation, and system-level thinking.*

**Technical Focus:**
- **Agent frameworks:** LangGraph, CrewAI, Autogen
- Agent design patterns: ReAct, tool-use, planning, reflection
- **Evals and verification:** How to systematically test and measure agent performance
- **Observability:** Tracing, logging, debugging agent behavior (LangSmith, Braintrust)
- Agent-to-agent protocols and communication
- Agent reliability and failure handling

**Tools:** LangGraph, CrewAI, LangSmith, Braintrust, MCP for agent-tool integrations

**Resources:**
- [LangGraph Agent Tutorials](https://langchain-ai.github.io/langgraph/tutorials/)
- [CrewAI Docs](https://docs.crewai.com/)
- [LangSmith Docs](https://docs.smith.langchain.com/)
- [DeepEval Docs](https://docs.deepeval.com/)

**🛠 Project:** Build and **open-source** a **domain-specific AI agent** with full evals and observability.

📁 [Week 3 Details & Checklist →](weeks/week-03-domain-specific-agents/README.md)

---

## 🔷 PHASE 2: Intensive · Weeks 4–10
*Develop into a system-level AI engineer focused on delivery, reliability, and operating in real enterprise environments.*

---

### Week 4: Real-World Project Delivery I
> *Execute real projects, translating ambiguous requirements into production-ready systems under professional constraints.*

**Technical Focus:**
- Translating ambiguous, real-world problems into technical specs
- Professional delivery standards (code quality, documentation, testing)
- End-to-end deployment (CI/CD, Docker, cloud)
- Client/stakeholder collaboration simulation

**🛠 Project:** Pick **2 real-world problems** and deliver production-ready solutions.

📁 [Week 4 Details & Checklist →](weeks/week-04-project-delivery-1/README.md)

---

### Week 5: Real-World Project Delivery II
> *Speed, quality, and consistency. Deliver additional projects using refined AI-first methodologies.*

**Technical Focus:**
- Rapid delivery and time-boxing
- Tool selection optimization
- AI-assisted quality assurance
- Workflow refinement

**🛠 Project:** Deliver **2 more projects** with strict 3-day time constraints each.

📁 [Week 5 Details & Checklist →](weeks/week-05-project-delivery-2/README.md)

---

### Week 6: Enterprise Systems & Fine-Tuning
> *Work with large-scale systems, adapting and deploying fine-tuned models within enterprise constraints.*

**Technical Focus:**
- Enterprise architecture patterns for AI systems
- **Supervised fine-tuning:** When and why to fine-tune vs. prompt engineer vs. RAG
- **PEFT, LoRA, QLoRA:** Parameter-efficient fine-tuning of open-source models
- Dataset curation and preparation
- Model evaluation and benchmarking

**Tools:** HuggingFace PEFT, Axolotl, Unsloth, OpenAI fine-tuning API

**Resources:**
- [HuggingFace PEFT Docs](https://huggingface.co/docs/peft)
- [Axolotl](https://github.com/OpenAccess-AI-Collective/axolotl)
- [OpenAI Fine-Tuning Guide](https://platform.openai.com/docs/guides/fine-tuning)

**🛠 Project:** Build an **enterprise-grade, fine-tuned AI system** with rigorous benchmarking.

📁 [Week 6 Details & Checklist →](weeks/week-06-enterprise-fine-tuning/README.md)

---

### Week 7: Legacy Modernization & Multi-Agent Systems
> *Modern AI meets legacy software. Coordinate agent teams to refactor, extend, and modernize complex codebases.*

**Technical Focus:**
- **Multi-agent systems:** Supervisor agents, worker agents, agent coordination patterns
- Agent orchestration frameworks
- **Modernization pipelines:** Using agent teams to systematically refactor legacy code
- MCP for multi-agent coordination

**🛠 Project:** Build a **multi-agent modernization pipeline** for a real legacy open-source project.

📁 [Week 7 Details & Checklist →](weeks/week-07-legacy-modernization-multi-agent/README.md)

---

### Week 8: Multimodal AI & Rapid Domain Learning
> *Rapidly learn new domains using AI, combining text, image, audio, and interactive systems into complete experiences.*

**Technical Focus:**
- **Multimodal AI:** Vision models, image generation, voice/audio synthesis
- Image and video generation pipelines
- Voice and audio AI (TTS, STT, voice cloning)
- Cross-modal system integration
- AI-accelerated learning of unfamiliar domains

**Tools:** Eleven Labs, Replicate, Midjourney, Stable Diffusion, OpenAI Vision, Claude Vision

**Resources:**
- [Eleven Labs Docs](https://elevenlabs.io/docs)
- [Replicate Docs](https://replicate.com/docs)
- [OpenAI Vision Guide](https://platform.openai.com/docs/guides/vision)

**🛠 Project:** Build a **multimodal interactive experience** (AI Game or Multimodal Assistant).

📁 [Week 8 Details & Checklist →](weeks/week-08-multimodal-ai/README.md)

---

### Week 9: Capstone Development & AI Infrastructure
> *Design scalable AI systems while beginning capstone development.*

**Technical Focus:**
- **Scaling agents:** Running agents reliably at scale
- **Scaling MCPs:** Building and managing MCP server infrastructure
- Agent protocols for production systems
- Monitoring, logging, and infrastructure for AI systems
- Cloud deployment patterns for AI workloads

**🛠 Project:** Begin your **capstone project** — spec, architecture, infrastructure, and core implementation.

📁 [Week 9 Details & Checklist →](weeks/week-09-capstone-infrastructure/README.md)

---

### Week 10: Capstone Completion & Reinforcement Learning
> *Complete and deploy a comprehensive AI system capable of learning, adaptation, and real-world optimization.*

**Technical Focus:**
- **Reinforcement learning:** RL environments, reward design, training loops
- Advanced agent capabilities (self-improvement, adaptation)
- Performance optimization for AI systems
- End-to-end system delivery and presentation

**🛠 Project:** Complete your **capstone**, add RL component, demo video, blog post, and presentation.

📁 [Week 10 Details & Checklist →](weeks/week-10-capstone-rl/README.md)

---

## 📋 Weekly Habits

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

- ✅ **AI-first workflow mastery** — You code with AI agents, not just AI suggestions
- ✅ **MCP fluency** — You can build and integrate MCP servers for any tool or data source
- ✅ **Spec-driven development** — Every project starts with a spec; AI executes from specs
- ✅ **RAG expertise** — You can build production RAG pipelines and evaluate them rigorously
- ✅ **Agent engineering** — You can design, build, evaluate, and debug autonomous agents
- ✅ **Multi-agent orchestration** — You can coordinate agent teams to solve complex problems
- ✅ **Fine-tuning competency** — You know when and how to fine-tune models for production
- ✅ **Multimodal integration** — You can build systems spanning text, vision, audio
- ✅ **Enterprise readiness** — You can work with legacy systems and deploy at scale
- ✅ **RL fundamentals** — You can add learning and adaptation to AI systems
- ✅ **10+ shipped projects** on GitHub with docs, evals, and deployment
- ✅ **A capstone system** that would impress any AI engineering hiring panel

---

## 📂 Repository Structure

