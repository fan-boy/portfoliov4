import os
from langchain_community.document_loaders import TextLoader
from langchain_community.vectorstores import Chroma
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_core.documents import Document

# Path to your docs folder
docs_path = os.path.join(os.path.dirname(__file__), "docs")

# Load and tag each file with its project name
documents = []
for filename in os.listdir(docs_path):
    if filename.endswith(".txt"):
        file_path = os.path.join(docs_path, filename)
        loader = TextLoader(file_path)
        raw_docs = loader.load()

        # Use filename (without extension) as project name
        project_name = os.path.splitext(filename)[0]

        # Add metadata to each document
        for doc in raw_docs:
            doc.metadata["project"] = project_name
            documents.append(doc)

# Split into chunks
splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=100)
splits = splitter.split_documents(documents)

# Embed and store
embedding = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")
vectorstore = Chroma.from_documents(splits, embedding=embedding, persist_directory="./chroma_db")
vectorstore.persist()

print(f"✅ Ingested {len(splits)} chunks with project metadata.")
