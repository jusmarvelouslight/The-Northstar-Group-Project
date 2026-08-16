The Northstar Group Project

This is the backend API for the Northstar Clothing Co. inventory
chatbot. It is built with FastAPI and deployed as a serverless
function on Vercel. It connects to a Firebase Realtime Database for
live inventory data and uses CrewAI to power the AI agent.

Project Structure
```
/
├── api/
│   └── index.py           FastAPI app — Vercel serverless entry point
├── agents/
│   └── inventory_agent.py  CrewAI agent definition
├── tools/
│   └── firebase_tool.py    Custom Firebase inventory tool
├── DECISION_TREES.md       Chatbot classification and routing guide
├── AGENTS.md               Agent roles and responsibilities
├── requirements.txt        Python dependencies
├── vercel.json             Vercel deployment configuration
└── .env.example            Environment variable template
```

Setup

1. Clone the repository
```bash
git clone https://github.com/yourtechbaddie-ke/The-Northstar-Group-Project.git
cd The-Northstar-Group-Project
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Configure environment variables
Copy `.env.example` to `.env.local` and fill in your values:
```
FIREBASE_CREDENTIALS_JSON=<your Firebase service account JSON as one line>
FIREBASE_DATABASE_URL=https://the-northstar-group-project-default-rtdb.asia-southeast1.firebasedatabase.app
FIREBASE_INVENTORY_PATH=inventory
OPENAI_API_KEY=<your OpenAI API key>
OPENAI_MODEL_NAME=gpt-4o
```

4. Run locally
```bash
uvicorn api.index:app --reload --port 8000
```

5. Deploy to Vercel
- Push all files to GitHub
- Connect the repo to Vercel
- Add all environment variables in Vercel project settings
- Vercel auto-deploys on push to main

API Endpoints

GET /api/health
Returns service health status.

POST /api/chat
Accepts a customer message and returns an AI-generated inventory reply.

Request body:
```json
{"message": "Do you have the Arctic Fleece Jacket in my size?"}
```

Response:
```json
{"reply": "...", "source": "firebase_realtime_database", "model":
"gpt-4o", "status": "ok"}
```

Environment Variables
| Variable | Description |
|---|---|
| FIREBASE_CREDENTIALS_JSON | Firebase service account key as a
single-line JSON string |
| FIREBASE_DATABASE_URL | Your Firebase Realtime Database URL |
| FIREBASE_INVENTORY_PATH | Root node in Firebase where inventory
records live (default: inventory) |
| OPENAI_API_KEY | Your OpenAI API key |
| OPENAI_MODEL_NAME | Model to use (default: gpt-4o) |

Tech Stack
- FastAPI — Python web framework
- CrewAI — AI agent orchestration
- Firebase Admin SDK — Realtime Database access
- Vercel — Serverless deployment
- OpenAI GPT-4o — Language model
