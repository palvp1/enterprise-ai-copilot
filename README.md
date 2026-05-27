# Enterprise AI Copilot

This project is a simple enterprise HR copilot built using React, FastAPI, ChromaDB, and semantic search.

The goal of this project was to simulate how internal enterprise AI assistants work using Retrieval-Augmented Generation (RAG) concepts and vector-based document retrieval.

Users can ask questions related to HR policies such as onboarding, escalation procedures, and leave policies through a conversational interface.

---

# Why I Built This

I wanted to build a practical AI-enabled fullstack application that demonstrates:

- frontend + backend integration
- semantic retrieval workflows
- enterprise-style AI UX
- vector search using embeddings
- grounded AI responses using internal documents

This project focuses more on AI workflow orchestration and retrieval pipelines than on training ML models.

---

# Features

- HR policy chatbot interface
- Semantic document retrieval
- ChromaDB vector database integration
- FastAPI backend APIs
- React frontend
- Suggested prompts
- Dark mode UI
- Feedback buttons
- Source grounding / explainability
- Enterprise dashboard-style layout

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite
- CSS

## Backend
- Python
- FastAPI

## AI / Retrieval
- Sentence Transformers
- ChromaDB
- Semantic similarity search

---

# How It Works

1. User enters a question in the frontend.
2. Backend converts the query into embeddings.
3. ChromaDB searches for semantically similar HR documents.
4. Relevant document chunks are retrieved.
5. The response is displayed in the UI along with source context.

This follows a lightweight Retrieval-Augmented Generation (RAG) workflow.

---

# Example Queries

- What is onboarding?
- Explain escalation process
- What is the leave policy?

---

# Project Structure

```bash
enterprise-copilot/

├── frontend/
│
├── backend/
│   ├── documents/
│   ├── main.py
│   ├── rag.py
│   └── requirements.txt
│
└── README.md
```

---

# Running the Project

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn main:app --reload
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on:
```bash
http://localhost:5173
```

Backend runs on:
```bash
http://127.0.0.1:8000
```

---

# Architecture Overview

User Query
↓
React Frontend
↓
FastAPI Backend
↓
Embedding Generation
↓
ChromaDB Semantic Search
↓
Relevant HR Documents
↓
Grounded Response

---

# Design Decisions

A few intentional decisions made during development:

- Used semantic retrieval instead of keyword search
- Added source visibility for explainability
- Kept the UI enterprise-oriented instead of chatbot-themed
- Added lightweight human feedback controls
- Focused on practical AI integration instead of model training

---

# Future Improvements

Some improvements that could be added later:

- PDF ingestion
- Authentication / RBAC
- Streaming responses
- Conversation history
- Better chunking strategies
- Observability and logging
- OpenAI / hosted LLM integration

---

# What This Project Demonstrates

- Fullstack application development
- AI-assisted enterprise workflows
- Semantic retrieval systems
- API integration
- Vector database usage
- React + FastAPI integration
- Enterprise AI UX concepts

## Screenshots

### Dashboard
![Dashboard](screenshots/dashboard.png)

### Onboarding Query
![Onboarding](screenshots/onboarding.png)

### Escalation Query
![Escalation](screenshots/escalation.png)

---

# Author

Built as a practical enterprise AI copilot prototype for demonstrating AI-enabled software engineering workflows.