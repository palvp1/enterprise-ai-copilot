from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from dotenv import load_dotenv
from openai import OpenAI

from rag import load_documents, search_documents

import os

load_dotenv()

client = OpenAI(
    api_key=os.getenv("OPENAI_API_KEY")
)

app = FastAPI()

load_documents()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    message: str


@app.post("/chat")
async def chat(request: ChatRequest):

    try:

        docs = search_documents(request.message)

        context = "\n\n".join(docs)

        prompt = f"""
You are an enterprise HR assistant.

Use ONLY the provided HR documents to answer the question.

If the answer is not available in the documents,
say:
'I could not find that information in the enterprise documents.'

HR Documents:
{context}

Question:
{request.message}
"""

        response = client.chat.completions.create(
            model="gpt-4o-mini",

            messages=[
                {
                    "role": "user",
                    "content": prompt
                }
            ]
        )

        final_answer = response.choices[0].message.content

        return {
            "answer": final_answer,
            "sources": docs,
            "explanation":
            "AI response generated using semantic retrieval and enterprise document grounding."
        }

    except Exception as e:

        print(e)

        return {
            "answer":
            "An error occurred while generating the response.",

            "sources": [],

            "explanation":
            str(e)
        }