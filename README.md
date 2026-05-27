# Enterprise AI Copilot

An AI-powered enterprise HR assistant built using React, FastAPI, ChromaDB, and semantic retrieval (RAG).

The application enables employees to query internal HR policies using natural language through a modern conversational interface.

---

# Features

- Enterprise AI chatbot
- Semantic search using embeddings
- Retrieval-Augmented Generation (RAG)
- ChromaDB vector database
- FastAPI backend APIs
- React frontend
- Modern enterprise UI
- Suggested prompts
- Explainable AI responses
- Human feedback controls
- Dark mode interface

---

# Tech Stack

## Frontend
- React
- TypeScript
- Vite
- CSS

## Backend
- FastAPI
- Python

## AI / Retrieval
- Sentence Transformers
- ChromaDB
- Semantic Vector Search

---

# Architecture

User Query  
↓  
React Frontend  
↓  
FastAPI Backend  
↓  
Sentence Embeddings  
↓  
ChromaDB Semantic Retrieval  
↓  
Relevant HR Documents  
↓  
Grounded AI Response  

---

# How It Works

1. User submits a question from the frontend.
2. Backend converts the query into vector embeddings.
3. ChromaDB performs semantic similarity search.
4. Relevant HR documents are retrieved.
5. The system generates a grounded enterprise response.
6. Sources and explainability information are displayed in the UI.

---

# Project Structure

```bash
enterprise-copilot/
│
├── frontend/
│
├── backend/
│   ├── documents/
│   ├── main.py
│   ├── rag.py
│   ├── requirements.txt
│
└── README.md
```

---

# Setup Instructions

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

---

# Example Questions

- What is onboarding?
- Explain escalation process.
- What is leave policy?

---

# Responsible AI

- Responses are grounded using enterprise HR documents.
- Semantic retrieval reduces hallucinations.
- Feedback controls allow human evaluation of AI responses.
- Users should validate critical HR decisions with official HR teams.

---

# Future Improvements

- PDF uploads
- Authentication
- Streaming responses
- Conversation memory
- Enterprise RBAC
- Observability dashboards

---

# Screenshots

Add screenshots here for:
- Main dashboard
- Onboarding response
- Escalation response
- Dark mode UI

---

# Author

Built as an enterprise AI copilot prototype demonstrating:

- Fullstack engineering
- AI workflow orchestration
- Semantic retrieval systems
- Enterprise AI UX
- FastAPI backend development
- React frontend development