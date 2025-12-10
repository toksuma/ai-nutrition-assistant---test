# AI Nutrition Assistant

A monorepo project for analyzing food images and providing nutritional information.

## Project Structure

```
ai-nutrition-assistant/
├── backend/          # FastAPI backend
│   ├── main.py      # API endpoints with CORS
│   └── requirements.txt
└── frontend/         # React + Vite + Tailwind frontend
    └── src/
        └── App.jsx  # Image upload and analysis UI
```

## Quick Start

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Create a virtual environment and install dependencies:
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Start the backend server:
```bash
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

Backend will be available at: `http://localhost:8000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

Frontend will be available at: `http://localhost:5173`

## Usage

1. Start both backend and frontend servers
2. Open the frontend in your browser
3. Upload a food image
4. Click "Analyze Image" to get nutritional information
5. View the results (currently returns mock data: Pizza, 300 calories)

## API Endpoints

- `POST /api/analyze` - Accepts a food image and returns nutritional data

## Technologies

- **Backend**: FastAPI, Python, Uvicorn
- **Frontend**: React, Vite, Tailwind CSS
- **Features**: CORS enabled, File upload, Mock analysis endpoint
