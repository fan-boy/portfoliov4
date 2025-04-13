import re
from langchain_community.vectorstores import Chroma
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.chains import RetrievalQA
from langchain_anthropic import ChatAnthropic
from langchain_core.prompts import ChatPromptTemplate

from dotenv import load_dotenv
load_dotenv()


# Load vector store
embedding = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="./chroma_db", embedding_function=embedding)

# Define your prompt
prompt = ChatPromptTemplate.from_messages([
    ("system", 
     "You are a friendly, confident assistant speaking to someone who is learning about Adi (Aaditya Shete). "
     "The user is *not* Adi. Adi is the subject of the conversation. "
     "Speak in the second person, as if you're introducing Adi to a friend or colleague. "
     "Never address Adi directly. Do not say 'Adi, it sounds like you...' or 'From what you’ve described...'. "
     "Avoid hedging phrases like 'it seems like', 'it sounds like', or 'from what I understand'. "
     "Only answer questions that are directly related to Adi’s work, background, skills, projects, or personality. "
     "If a question is unrelated (e.g. about politics, sports, or general trivia), politely respond that you can only answer questions about Adi. "
     "Do not attempt to answer unrelated questions, even if you know the answer. "
     "Do not use section headers like 'What Adi Learned' or 'Adi’s Key Contributions'. "
     "Instead, weave those insights naturally into a confident, conversational response. "
     "When asked about a project, always include:\n"
     "- A clear summary of the project\n"
     "- Adi’s key contributions and responsibilities\n"
     "- What Adi learned or took away from the experience\n"
     "Speak with clarity and confidence. If something is unknown, say so honestly but kindly."),
    ("human", "{context}\n\n{question}")
])

# Define a function to extract project name from the question
def extract_project_name(question: str, known_projects: list[str]) -> str | None:
    for project in known_projects:
        if re.search(rf"\b{re.escape(project)}\b", question, re.IGNORECASE):
            return project
    return None

# List of known project names (should match your .txt filenames)
known_projects = [
    "cadence",
    "universitypark",
    "dune-security-case-study",
    "online-order-scheduling",
    "sustainability-platform",
    "about-me"
]

# Function to build the QA chain dynamically
def get_qa_chain(question: str):
    project = extract_project_name(question, known_projects)

    if project:
        retriever = vectorstore.as_retriever(search_kwargs={"filter": {"project": project}})
    else:
        retriever = vectorstore.as_retriever()

    llm = ChatAnthropic(
        model="claude-3-haiku-20240307",
        temperature=0.5,
        max_tokens=1024
    )

    return RetrievalQA.from_chain_type(
        llm=llm,
        retriever=retriever,
        chain_type="stuff",
        chain_type_kwargs={"prompt": prompt},
        return_source_documents=True
    )


# prompt = ChatPromptTemplate.from_messages([
#     ("system", 
#      "You are acting as Adi (Aaditya Shete), a friendly, thoughtful, and design-savvy product designer and fullstack developer. "
#      "Speak in the first person, as if you're Adi talking directly to the user. "
#      "Be warm, approachable, and confident. Avoid robotic phrases like 'based on the information provided.' "
#      "If you don’t know something, say so honestly, but keep the tone casual and kind."),
#     ("human", "{context}\n\n{question}")
# ])


