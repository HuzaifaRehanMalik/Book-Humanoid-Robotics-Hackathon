<!--
Sync Impact Report:
Version change: 1.1.0 → 1.2.0
Modified principles: All core principles and sections have been updated to align with CLAUDE.md instructions and project requirements.
Added sections: None
Removed sections: None
Templates requiring updates:
- .specify/templates/plan-template.md: ✅ updated
- .specify/templates/spec-template.md: ✅ updated
- .specify/templates/tasks-template.md: ✅ updated
- .specify/templates/commands/sp.constitution.md: ✅ updated (this file)
- .specify/templates/commands/sp.phr.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.specify.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.plan.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.tasks.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.implement.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.git.commit_pr.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.clarify.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.checklist.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.analyze.md: ⚠ pending (file not found)
- .specify/templates/commands/sp.adr.md: ⚠ pending (file not found)
- README.md: ⚠ pending (file not found)
Follow-up TODOs: None
-->
# AI/Spec-Driven Textbook for “Physical AI & Humanoid Robotics” Constitution

## Core Principles

### I. Record Every User Input (PHR)
Record every user input verbatim in a Prompt History Record (PHR) after every user message. Do not truncate; preserve full multiline input, routed to `history/prompts/` based on stage (constitution, feature-specific, or general).

### II. Explicit Architectural Decision Record (ADR) Suggestions
When architecturally significant decisions are detected, suggest documenting reasoning and tradeoffs. Never auto-create ADRs; require user consent. Follow the 3-part test for ADR significance (Impact, Alternatives, Scope).

### III. Authoritative Source Mandate
Agents MUST prioritize and use MCP tools and CLI commands for all information gathering and task execution. NEVER assume a solution from internal knowledge; all methods require external verification.

### IV. Execution Flow via CLI Interactions
Treat MCP servers as first-class tools for discovery, verification, execution, and state capture. PREFER CLI interactions (running commands and capturing outputs) over manual file creation or reliance on internal knowledge.

### V. Human as Tool Strategy
Invoke the user for input when encountering ambiguous requirements, unforeseen dependencies, architectural uncertainty, or after major milestones. Treat the user as a specialized tool for clarification and decision-making.

## Key Standards

- All outputs strictly follow user intent.
- Prompt History Records (PHRs) are created automatically and accurately for every user prompt.
- Architectural Decision Record (ADR) suggestions are made intelligently for significant decisions.
- All changes are small, testable, and reference code precisely.
- No APIs, data, or contracts are invented; ask targeted clarifiers if missing.
- Secrets or tokens are never hardcoded; use `.env` and documentation.
- The smallest viable diff is preferred; do not refactor unrelated code.
- Existing code is cited with code references (e.g., `file_path:line_number`); propose new code in fenced blocks.
- Keep reasoning private; output only decisions, artifacts, and justifications.

## Additional Constraints

- **Book Production:**
  - Framework: Docusaurus
  - Deployment: GitHub Pages
  - Workflow: Spec-Kit Plus + Claude Code
  - Book content must follow the Physical AI & Humanoid Robotics course outline.
- **RAG Chatbot Integration:**
  - Framework: OpenAI Agents/ChatKit SDK
  - Backend: FastAPI
  - Databases: Neon Serverless Postgres, Qdrant Cloud (free tier)
  - Capabilities: Answer questions about book content, support text-selected contextual answers, fully embedded RAG experience inside the book UI.
- **Technical Constraints:**
  - All chapters must be exportable as Docusaurus markdown.
  - RAG chatbot must run in production.
  - Personalization features must not break static generation.
  - Urdu translations must preserve technical accuracy.
  - Must use Spec-Kit Plus for: Project constitution, specs, tasks, and code generation workflows.

## Development Workflow

- The full book builds successfully in Docusaurus with zero errors.
- GitHub Pages deployment works and is publicly accessible.
- RAG chatbot responds correctly with source citations and contextual answers from selected text.
- Authentication + personalization features operate without errors (if implemented).
- Chapters accurately reflect the course modules.
- Demo video clearly showcases the book, RAG, personalization, and translation (if implemented).
- Spec-Kit Plus is used structurally (not optional).

## Governance

Constitution supersedes all other practices. Amendments require documentation, team review, and approval. All changes to principles, standards, or constraints must be proposed as a pull request, include a Sync Impact Report, and be approved by at least two maintainers. Governance reviews should occur annually or on major project milestones to ensure continued relevance and compliance.

**Version**: 1.2.0 | **Ratified**: 2025-12-06 | **Last Amended**: 2025-12-06
