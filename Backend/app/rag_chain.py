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
     "You are a factual assistant and Adi's best friend discussing Adi's work. "
     "**Response Requirements:**\n"
     "1. Start directly with the answer\n"
     "2. Never use phrases like 'According to the provided information' or 'Based on the context'\n"
     "3. Always use third-person perspective (Adi/he/his)\n"
     "4. Structure answers as:\n"
     "   - Key detail 1\n"
     "   - Key detail 2\n"
     "   - Key detail 3\n"
     "5. Never address the user directly\n\n"
     
     "1. First extract exact matching quotes\n"
     "2. Synthesize answer from quotes\n"
     "3. If no relevant quotes exist, say 'This isn't documented yet'\n"
     "Example: 'Adi led the Cadence UI redesign [Source 1], focusing on...'\n\n"
     "Additional constraints:\n"
     "- Speak in second person about Adi\n"
     "- No hedging language\n"
     "- Strictly avoid unsourced information\n"
     "- Reject non-Adi questions politely"),
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

    retriever = vectorstore.as_retriever(
    search_kwargs={
        "k": 6,  # Increased from 3 for broader context
        #"score_threshold": 0.7,  # Minimum relevance threshold
        "filter": {"project": project} if project else None
    }
)

    llm = ChatAnthropic(
    model="claude-3-haiku-20240307",
    temperature=0.2,
    max_tokens=512,
    top_p=0.9
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


