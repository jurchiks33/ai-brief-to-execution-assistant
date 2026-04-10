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

### Current MVP Status

The current MVP now supports:

- raw brief input through a simple web interface
- live AI-based analysis using the OpenAI API
- structured output for internal agency planning
- support for incomplete, messy, or partially defined briefs
- multiple demo sample brief types for quick testing

The current output includes:

- brief summary
- campaign objectives
- target audience
- recommended channels
- suggested deliverables
- missing client inputs
- execution plan
- internal task breakdown

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

## Why This Idea Was Chosen

Agency teams often receive briefs that are not fully ready for execution. Important information may be missing, priorities may be unclear, and the internal team still needs to decide what should happen next.

This MVP was chosen because it solves a very practical and common workflow problem:

- incoming briefs are often messy
- teams need fast internal clarification
- execution planning takes time
- handoff quality affects delivery quality

Instead of building a broad AI platform, the project focuses on one narrow but useful workflow:

**raw brief in -> structured internal execution plan out**

That makes the MVP easier to understand, easier to demo, and more relevant to real agency operations.

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

## Example MVP Flow

The MVP currently supports this workflow:

1. A user pastes a messy or incomplete client brief into the app.
2. The backend sends the brief to the LLM for structured analysis.
3. The AI returns a consistent internal planning format.
4. The frontend displays the result in clearly separated sections.
5. The team can use the output as a starting point for clarification and execution planning.

Example brief types currently supported well:

- product launch briefs
- lead generation requests
- SEO/content planning briefs
- rough early-stage campaign ideas
- incomplete client notes with unclear scope

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

## Tech Stack Notes

The current MVP uses:

- **FastAPI** for the backend API layer
- **React + TypeScript + Vite** for the frontend demo UI
- **OpenAI API** for live brief analysis
- **structured schema-based response handling** to improve reliability of output formatting

This stack was chosen to keep the MVP fast to build while still looking like a real product demo rather than a one-off script.

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

## How to Run the Project

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd ai-brief-to-execution-assistant
```

### 2. Backend setup

Create a backend environment file:

```bash
touch backend/.env
```

Add the required environment variables:

```env
APP_NAME=AI Brief-to-Execution Assistant
APP_ENV=development
DEBUG=true

HOST=127.0.0.1
PORT=8000
API_V1_PREFIX=/api/v1

OPENAI_API_KEY=your_real_api_key_here
OPENAI_MODEL=gpt-4.1-mini
```

Install backend dependencies and run the API:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Backend should be available at:

```text
http://127.0.0.1:8000
```

Swagger docs:

```text
http://127.0.0.1:8000/docs
```

### 3. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend should be available at:

```text
http://localhost:5173/
```

---

## Demo Use Cases

The current MVP is especially useful for testing scenarios such as:

### Product Launch
Turn a rough launch request into a plan covering channels, deliverables, missing inputs, and execution steps.

### Lead Generation
Convert a high-level lead generation request into a more concrete campaign setup with clarifications and suggested workstreams.

### SEO / Content Planning
Use a strategic content or SEO-oriented brief and generate internal planning outputs around assets, priorities, and next actions.

### Stress Testing with Messy Input
Paste a vague, incomplete, or rushed brief and check whether the assistant still produces useful planning structure.

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
- [x] create brief submission flow
- [x] connect frontend to backend
- [x] validate raw input
- [x] build brief analysis endpoint
- [x] return structured execution output
- [x] display results in the UI

### Phase 3 — AI Integration
- [x] replace mock analysis with live LLM analysis
- [x] improve prompt structure
- [x] enforce more reliable output formatting
- [x] improve usefulness of generated execution steps and task suggestions

### Phase 4 — Demo Polish
- [x] improve interface styling
- [x] add better loading and error handling
- [x] refine sample brief flow
- [x] improve documentation and demo presentation

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

## What I Would Improve Next

Given more time, the next steps would be:

- allow editing of generated output directly in the UI
- add copy/export functionality for easier handoff
- save brief history and previous results
- support reusable internal templates
- add role-aware task generation for strategy, paid media, content, design, and web
- improve prompt robustness for more varied brief quality
- add integrations with collaboration or project tools

---

## Notes

This is an active work in progress.

Some files and components are currently lightweight or placeholder implementations while the MVP flow is being completed.

The initial version is intentionally narrow in scope so that the core value of the idea can be demonstrated quickly and clearly.

---

## Submission Context

This MVP was built as a focused practical demo to show how an AI developer can go from idea to working artifact quickly.

The emphasis was not on building a large platform, but on selecting one realistic agency problem and solving it in a clear, usable way.

The project was intentionally scoped to demonstrate:

- practical prioritization
- fast MVP thinking
- full-stack implementation ability
- useful AI integration
- a clear link between business need and technical solution

---

## License

License to be added later.