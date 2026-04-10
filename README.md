# AI Brief-to-Execution Assistant for Agency Teams

A work-in-progress AI application that helps agency teams transform raw client briefs into structured execution plans.

The goal of this project is to build a practical end-to-end AI assistant that can take messy or incomplete brief input, identify the key business context, detect missing information, and generate a clear execution-oriented output for internal agency use.

This MVP is designed around a realistic agency workflow where teams need to move quickly from incoming client input to actionable planning across channels such as social media, paid ads, content, landing pages, SEO, and campaign execution.

---

## Project Status

This project is currently in the MVP build phase.

Current focus:

- defining the MVP scope clearly
- setting up backend and frontend foundations
- building a working brief-to-execution flow
- creating structured AI-generated output for agency use
- preparing a clean demo artifact and GitHub presentation

This repository is being built as a practical AI product demo and will grow step by step into a more complete internal workflow assistant.

---

## Project Goal

The main goal is to build an AI Brief-to-Execution Assistant that can help agency teams work faster and more consistently when handling incoming client briefs.

The assistant should help transform raw input such as:

- campaign requests
- marketing briefs
- content requests
- launch ideas
- incomplete client notes
- internal planning input

into structured outputs such as:

- brief summaries
- campaign objectives
- target audience assumptions
- suggested deliverables
- missing information
- execution steps
- task breakdowns

The core idea is to reduce ambiguity early, improve handoff quality, and speed up the path from brief to execution.

---

## Planned MVP Features

### Brief Input

- paste a raw client brief into the interface
- support unstructured and incomplete text input
- allow quick demo use with sample brief content

### AI Brief Analysis

- summarize the brief
- identify likely campaign or project objectives
- detect relevant audience, channels, and deliverables
- turn unclear input into a more structured working format

### Missing Information Detection

- identify gaps in the brief
- suggest what should be clarified with the client or internal team
- make planning risks visible earlier

### Execution Output

- generate a structured execution plan
- suggest next steps
- break work into actionable tasks
- provide output that can support internal review and planning

### User Interface

- simple brief submission page
- result sections for summary, goals, channels, deliverables, and tasks
- lightweight loading and error states
- clean presentation suitable for demo purposes

---

## Tech Stack

### Backend

- Python
- FastAPI
- Pydantic

### Frontend

- React
- TypeScript
- Vite

### AI Layer

- prompt-based brief analysis
- structured output generation
- OpenAI integration planned for live analysis

### Development

- GitHub
- Markdown documentation
- VS Code

---

## Project Structure

The project is organized into backend, frontend, and documentation layers to keep the MVP simple while still maintaining a clean and professional structure.

```text
ai-brief-to-execution-assistant/
│
├── backend/
│   ├── app/
│   │   ├── core/
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── services/
│   ├── .env
│   └── requirements.txt
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   ├── package.json
│   └── vite.config.ts
│
├── docs/
│   └── project_notes.md
│
├── .env.example
├── .gitignore
├── LICENSE
└── README.md
```

---

## Current Repository Focus

At this stage, the repository is focused on:

- building a clear MVP with one strong workflow
- showing how an AI idea is translated into a working artifact
- keeping the structure simple and understandable
- making the project easy to review for recruiters, hiring teams, and collaborators
- demonstrating practical AI product thinking, not just model usage

---

## Development Roadmap

### Phase 1 — Foundation
- [x] define project idea
- [x] define MVP scope
- [x] create folder structure
- [x] create initial README
- [x] create initial `.gitignore`
- [x] create environment configuration template
- [x] set up backend foundation
- [x] set up frontend foundation

### Phase 2 — Core MVP Flow
- [ ] create brief submission flow
- [ ] connect frontend to backend
- [x] validate raw input
- [x] build brief analysis endpoint
- [x] return structured execution output
- [ ] display results in the UI

### Phase 3 — AI Integration
- [ ] replace mock analysis with live LLM analysis
- [ ] improve prompt structure
- [ ] enforce more reliable output formatting
- [ ] improve usefulness of generated execution steps and task suggestions

### Phase 4 — Demo Polish
- [ ] improve interface styling
- [ ] add better loading and error handling
- [ ] refine sample brief flow
- [ ] improve documentation and demo presentation

### Phase 5 — Future Expansion
- [ ] project saving
- [ ] editable outputs
- [ ] export options
- [ ] internal templates
- [ ] role-based task generation
- [ ] integrations with Slack, Notion, or project tools

---

## Design Principles

This project is being built with the following principles in mind:

- practical business value first
- narrow but useful MVP scope
- clear separation of concerns
- modular backend and frontend structure
- human-readable output
- fast iteration
- professional documentation from the start

---

## Why This Project

This project is intended to demonstrate practical skills in:

- AI application development
- translating ambiguous business input into structured output
- backend API design
- frontend application structure
- product thinking for internal workflow tools
- building fast MVPs for real-world use cases
- organizing a project in a clean and professional way

It is also designed to reflect the kind of value an AI developer could create inside an agency environment where speed, clarity, and execution quality matter.

---

## Notes

This is an active work in progress.

Some files and components are currently lightweight or placeholder implementations while the MVP flow is being completed.

The initial version is intentionally narrow in scope so that the core value of the idea can be demonstrated quickly and clearly.

---

## License

License to be added later.