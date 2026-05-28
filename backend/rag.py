import os
import chromadb
from sentence_transformers import SentenceTransformer

model = SentenceTransformer("all-MiniLM-L6-v2")

client = chromadb.Client()

collection = client.get_or_create_collection(name="company_docs")


def load_documents():
    documents_path = os.path.join(
        os.path.dirname(__file__),
        "documents"
    )

    documents = []
    ids = []

    for filename in os.listdir(documents_path):
        filepath = os.path.join(documents_path, filename)

        with open(filepath, "r", encoding="utf-8") as file:
            content = file.read()

            documents.append(content)
            ids.append(filename)

    existing = collection.count()

    if existing == 0:
        embeddings = model.encode(documents).tolist()

        collection.add(
            documents=documents,
            embeddings=embeddings,
            ids=ids
        )


def search_documents(query):
    query_embedding = model.encode(query).tolist()

    results = collection.query(
        query_embeddings=[query_embedding],
        n_results=2
    )

    documents = results["documents"][0]

    return documents