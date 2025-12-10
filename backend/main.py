from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Enable CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],  # Frontend origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "AI Nutrition Assistant API"}

@app.post("/api/analyze")
async def analyze_food(file: UploadFile = File(...)):
    """
    Mock endpoint that accepts an image file and returns mock nutrition data
    """
    # Mock response - in a real application, this would analyze the image
    return {
        "dish": "Pizza",
        "cals": 300
    }
