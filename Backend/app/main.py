from fastapi import FastAPI
from pydantic import BaseModel
from app.rag_chain import get_qa_chain
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://your-frontend-domain.com"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Query(BaseModel):
    question: str

@app.post("/askaboutadi")
async def ask_claude(query: Query):
    chain = get_qa_chain(query.question)
    result = chain.invoke({"query": query.question})
    return {
        "response": result["result"],
        "sources": [doc.metadata.get("project", "unknown") for doc in result["source_documents"]]
    }
