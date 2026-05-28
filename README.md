# Enterprise AI Copilot

A lightweight enterprise AI copilot built using React, FastAPI, OpenAI, and ChromaDB.

This project simulates how internal enterprise AI assistants work using semantic retrieval and grounded LLM-generated responses.

The system allows employees to ask HR-related questions in natural language and receive responses generated using enterprise policy documents.

---

# Table of Contents

1. Project Overview
2. Objectives
3. Core Features
4. System Architecture
5. Technical Workflow
6. Retrieval-Augmented Generation (RAG)
7. Technology Stack
8. Project Structure
9. Setup Instructions
10. Screenshots
11. Design Decisions
12. Accuracy & Limitations
13. Risks & Responsible AI Considerations
14. Assumptions
15. Future Improvements
16. Key Learnings
17. Conclusion

---

# 1. Project Overview

The goal of this project was to build a practical enterprise AI assistant capable of retrieving and generating grounded responses using internal HR documents.

Instead of functioning as a generic chatbot, the system focuses on:

* semantic retrieval
* enterprise AI workflows
* grounded response generation
* explainability
* conversational enterprise UX

The project demonstrates how Retrieval-Augmented Generation (RAG) systems can be integrated into modern fullstack applications.

---

# 2. Objectives

The primary objectives of this project were:

* Build a modern AI-enabled fullstack application
* Implement semantic document retrieval
* Integrate OpenAI for response generation
* Simulate enterprise AI assistant workflows
* Demonstrate AI orchestration concepts
* Create a professional enterprise-style UI
* Explore responsible AI considerations

---

# 3. Core Features

## AI Features

* Semantic document retrieval
* Retrieval-Augmented Generation (RAG)
* OpenAI GPT integration
* Grounded AI responses
* Source-aware response generation

## Frontend Features

* Enterprise dashboard UI
* Conversational chat interface
* Suggested prompts
* Dark mode design
* Human feedback buttons

## Backend Features

* FastAPI REST APIs
* Vector search orchestration
* Prompt construction
* Error handling
* Retrieval pipeline integration

---

# 4. System Architecture

The application follows a lightweight Retrieval-Augmented Generation (RAG) architecture.

```text id="jjlwmr"
User Query
   ↓
React Frontend
   ↓
FastAPI Backend
   ↓
Embedding Generation
   ↓
ChromaDB Semantic Retrieval
   ↓
Relevant HR Document Retrieval
   ↓
OpenAI GPT Response Generation
   ↓
Grounded Enterprise Response
```

---

## Frontend Layer

The frontend was developed using React and TypeScript.

Responsibilities:

* render conversational UI
* capture user queries
* display AI-generated responses
* show explainability controls
* provide enterprise dashboard experience

---

## Backend Layer

The backend was developed using FastAPI.

Responsibilities:

* receive frontend API requests
* generate embeddings
* orchestrate retrieval workflow
* integrate OpenAI APIs
* return grounded responses

---

## Retrieval Layer

The retrieval system uses:

* SentenceTransformers
* ChromaDB vector database

HR policy documents are converted into vector embeddings and stored in ChromaDB for semantic similarity search.

---

## LLM Layer

OpenAI GPT is used for response generation.

Retrieved document context is injected into prompts before generation.

This ensures:

* grounded responses
* reduced hallucinations
* enterprise-focused outputs

---

# 5. Technical Workflow

## Step 1 — User Query

The user submits a natural language question from the frontend.

Example:

```text id="t5fq0u"
What is onboarding?
```

---

## Step 2 — Embedding Generation

The backend converts the user query into embeddings using SentenceTransformers.

Example:

```python id="uwtqai"
SentenceTransformer("all-MiniLM-L6-v2")
```

Embeddings are numerical vector representations of text semantics.

---

## Step 3 — Semantic Retrieval

ChromaDB performs semantic similarity search to retrieve the most relevant HR documents.

This allows:

* meaning-based search
* contextual retrieval
* improved relevance

---

## Step 4 — Prompt Construction

Retrieved context is injected into an LLM prompt.

Example:

```text id="4mfe6m"
Answer ONLY using the provided HR documents.
```

This constrains the model and improves grounding.

---

## Step 5 — Response Generation

OpenAI GPT generates the final enterprise response using retrieved context.

---

## Step 6 — Frontend Rendering

The AI-generated response is displayed in the frontend chat UI.

Additional UI elements:

* source grounding
* explainability messaging
* feedback controls

---

# 6. Retrieval-Augmented Generation (RAG)

This project uses a lightweight RAG architecture.

## Why RAG?

Instead of directly querying an LLM:

1. relevant documents are retrieved first
2. retrieved context is injected into prompts
3. the LLM generates grounded responses

Benefits:

* reduces hallucinations
* improves factual grounding
* supports enterprise knowledge retrieval
* improves trustworthiness

---

# 7. Technology Stack

## Frontend

* React
* TypeScript
* Vite
* CSS

## Backend

* Python
* FastAPI
* Uvicorn

## AI / Retrieval

* OpenAI API
* Sentence Transformers
* ChromaDB
* Vector Embeddings
* Semantic Search

---

# 8. Project Structure

```bash id="djck4w"
enterprise-ai-copilot/
│
├── backend/
│   ├── documents/
│   ├── main.py
│   ├── rag.py
│   ├── requirements.txt
│   └── .env
│
├── frontend/
│   ├── src/
│   └── package.json
│
├── screenshots/
│
├── README.md
└── .gitignore
```

---

# 9. Setup Instructions

## Backend Setup

```bash id="5jlwm4"
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

Backend runs at:

```text id="8nnr0d"
http://127.0.0.1:8000
```

---

## Frontend Setup

```bash id="jlwmst"
cd frontend

npm install

npm run dev
```

Frontend runs at:

```text id="vbjlwm"
http://localhost:5173
```

---

## Environment Variables

Create `.env` inside backend:

```env id="0wev4g"
OPENAI_API_KEY=your_openai_api_key
```

---

# 10. Screenshots

## Dashboard

![Dashboard](screenshots/dashboard.png)

---

## Onboarding Workflow

![Onboarding](screenshots/onboarding.png)

---

## Escalation Workflow

![Escalation](screenshots/escalation.png)

---

# 11. Design Decisions

Several intentional design decisions were made during development.

## Semantic Retrieval Instead of Keyword Search

Semantic search was chosen to improve natural language understanding and retrieval relevance.

---

## FastAPI for Backend APIs

FastAPI was selected because it is:

* lightweight
* async-friendly
* commonly used in AI orchestration services

---

## ChromaDB for Vector Storage

ChromaDB was used for:

* local vector retrieval
* fast prototyping
* lightweight semantic search workflows

---

## Enterprise-Oriented UI

The UI was intentionally designed to resemble internal enterprise copilot tools rather than consumer chatbot interfaces.

---

## Grounded AI Responses

Responses were constrained using retrieved enterprise context to reduce hallucinations.

---

# 12. Accuracy & Limitations

The system combines semantic retrieval with LLM-based response generation to improve factual grounding.

However, several limitations still exist.

## Current Limitations

* Responses depend heavily on underlying HR documents.
* Retrieval quality may degrade for ambiguous queries.
* The document corpus is relatively small.
* Multi-turn conversational memory is not implemented.
* Edge-case HR policies may not always be retrieved correctly.
* LLM-generated summaries may occasionally omit details.

This project should be viewed as a prototype demonstrating enterprise AI workflows rather than a production-ready HR decision system.

---

# 13. Risks & Responsible AI Considerations

Several AI-related risks were considered during development.

## Incorrect Answers

LLMs may generate inaccurate responses if retrieval quality is poor.

### Mitigation

* retrieval grounding
* prompt constraints
* source visibility

---

## Over-Reliance on AI

Users may incorrectly assume AI responses are always authoritative.

### Mitigation

* explainability messaging
* enterprise disclaimers
* recommendation to verify important HR decisions with official teams

---

## Hallucination Risk

LLMs can generate unsupported information.

### Mitigation

* Retrieval-Augmented Generation (RAG)
* constrained prompting
* grounded context injection

---

## UX Limitations

Conversational interfaces may oversimplify complex enterprise policies.

### Mitigation

* grounded responses
* enterprise-focused wording
* human feedback controls

---

# 14. Assumptions

The following assumptions were made during development:

* HR documents contain accurate information.
* Users submit English-language queries.
* The system targets small-to-medium internal document sets.
* Authentication and RBAC were considered out of scope.
* The system is intended for informational assistance only.

---

# 15. Future Improvements

With additional development time, several improvements could be added.

## AI Improvements

* multi-turn conversation memory
* streaming AI responses
* retrieval evaluation metrics
* confidence scoring
* advanced chunking strategies

---

## Enterprise Improvements

* authentication and RBAC
* admin document upload workflows
* observability dashboards
* prompt versioning
* analytics pipelines

---

## Platform Improvements

* persistent vector database storage
* support for PDFs and larger datasets
* async processing
* scalable deployment pipelines

---

# 16. Key Learnings

This project helped strengthen understanding of:

* Retrieval-Augmented Generation (RAG)
* semantic search systems
* vector embeddings
* ChromaDB vector databases
* OpenAI integration
* FastAPI backend development
* React frontend engineering
* AI workflow orchestration
* enterprise AI UX concepts

---

# 17. Conclusion

This project demonstrates a practical implementation of an enterprise AI copilot using modern AI engineering concepts.

The system combines:

* semantic retrieval
* vector databases
* grounded LLM generation
* fullstack architecture
* enterprise UX patterns

to simulate a lightweight internal enterprise AI assistant.

Core technologies used:

* React
* FastAPI
* OpenAI GPT
* ChromaDB
* Sentence Transformers
* Semantic Search
* Retrieval-Augmented Generation (RAG)

---

# Author

Built by Pallavi Prathapaneni
