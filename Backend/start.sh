# backend/start.sh
#!/bin/bash
python app/ingest_docs.py  # optional: rebuild vector store on deploy
uvicorn app.main:app --host 0.0.0.0 --port 8000
