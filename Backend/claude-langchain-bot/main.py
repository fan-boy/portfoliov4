# main.py
import os
from fastapi import FastAPI
from pydantic import BaseModel
from dotenv import load_dotenv
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate

# Load environment variables
load_dotenv()

# Initialize FastAPI app
app = FastAPI()

# Set up Claude model
llm = ChatAnthropic(
    model="claude-3-haiku-20240307",
    temperature=0.5,
    max_tokens=1024
)

# Define prompt template
prompt = ChatPromptTemplate.from_template(
    "You are a senior creative designer. Answer the following question based on your portfolio:\n\n{question}"
)

# Define request body schema
class Query(BaseModel):
    question: str

# Define POST endpoint
@app.post("/ask")
async def ask_claude(query: Query):
    chain = prompt | llm
    response = chain.invoke({"question": query.question})
    return {"response": response.content}
