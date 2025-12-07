---
id: 0002
title: Create feature specification for AI-Textbook
stage: spec
date: 2025-12-06
surface: agent
model: claude-sonnet-4-5-20250929
feature: ai-textbook
branch: master
user: unknown
command: /sp.specify
labels: ["feature", "specification", "ai-textbook"]
links:
  spec: specs/1-ai-textbook/spec.md
  ticket: null
  adr: null
  pr: null
files:
  - specs/1-ai-textbook/spec.md
  - specs/1-ai-textbook/checklists/requirements.md
tests:
  - none
---

## Prompt

```
Project: AI/Spec-Driven Textbook — “Physical AI & Humanoid Robotics”
Goal: Build an AI-native textbook using Docusaurus, Spec-Kit Plus, Claude Code, and integrated RAG per Hackathon I rules.

---

## Objectives
- Full textbook per course outline
- Spec-Kit Plus + Claude Code workflow
- Deploy via Docusaurus → GitHub Pages
- Embed RAG chatbot
- Optional AI-native features for bonus points

---

## Hackathon Core (100 pts)
- **Book:** Docusaurus, GitHub Pages, Spec-Kit Plus + Claude Code
- **RAG:** OpenAI Agents/ChatKit, FastAPI, Neon Postgres, Qdrant; support text-selected answers

---

## Bonus (Up to 150 pts)
- **+50:** Reusable Intelligence — Subagents & Agent Skills
- **+50:** Authentication & Personalization — better-auth, user profile, adaptive chapters
- **+50:** Personalized Chapters — “Personalize” button adjusts content
- **+50:** Urdu Translation — “Urdu Translate” button

---

## Submission
- Public GitHub repo
- Deployed book link
- 90-sec demo video
- WhatsApp number

---

## Timeline
- Submission: Nov 30, 2025 – 06:00 PM
- Live presentation: Nov 30, 2025 – 06:00 PM (Zoom)

---

## Course Content
- Modules: ROS 2, Gazebo & Unity, NVIDIA Isaac, Vision-Language-Action
- Weekly: W1-2 Foundations, W3-5 ROS 2, W6-7 Gazebo, W8-10 Isaac, W11-12 Humanoids, W13 Conversational robotics
- Capstone: Autonomous humanoid — perception, navigation, manipulation, voice commands

---

## Assessments
- ROS 2 project
- Gazebo simulation
- Isaac perception pipeline
- Humanoid Capstone

---

## Hardware
- Digital Twin Workstation (RTX GPU, Linux)
- Jetson Orin Edge Kit
- RealSense D435i/D455
- Optional robots: Unitree Go2/G1, Robotis OP3, Hiwonder kits
- Cloud alternative: AWS g5/g6e

---

## Constraints
- Markdown exportable chapters
- RAG functional in production
- Personalization & Urdu translation must work
- Must follow Spec-Kit Plus workflow

---

## Success Criteria
- Book builds cleanly & deploys
- RAG responds correctly
- Authentication & personalization functional
- Chapters match modules
- Demo shows book, RAG, personalization, translation
- Spec-Kit Plus used structurally
```

## Response snapshot

The feature specification for the AI/Spec-Driven Textbook for “Physical AI & Humanoid Robotics” was successfully created and validated. It outlines user scenarios, functional requirements, key entities, dependencies, assumptions, and measurable success criteria.

## Outcome

- ✅ Impact: The feature specification for the AI-driven textbook was successfully created and validated, providing a clear foundation for the planning phase.
- 🧪 Tests: none
- 📁 Files: specs/1-ai-textbook/spec.md and specs/1-ai-textbook/checklists/requirements.md were created/modified.
- 🔁 Next prompts: Proceed with `/sp.plan` to create an implementation plan.
- 🧠 Reflection: The specification process for this project highlighted the importance of a clear and detailed input to generate a comprehensive and validated feature spec.

## Evaluation notes (flywheel)

- Failure modes observed: The `create-phr.sh` script was not found, requiring a manual fallback for PHR creation.
- Graders run and results (PASS/FAIL): Not applicable.
- Prompt variant (if applicable): Not applicable.
- Next experiment (smallest change to try): Ensure the `create-phr.sh` script is available and executable in the environment, or streamline the agent-native PHR creation process to be fully automated without manual templating.
