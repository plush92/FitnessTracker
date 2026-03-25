from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import psycopg2
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection using environment variables
conn = psycopg2.connect(
    dbname=os.getenv("DB_NAME", "fitness_pipeline"),
    user=os.getenv("DB_USER", "postgres"),
    password=os.getenv("DB_PASSWORD"),
    host=os.getenv("DB_HOST", "localhost"),
    port=os.getenv("DB_PORT", 5435)
)

@app.get("/")
def root():
    return {"message": "Fitness Tracker API", "endpoints": ["/analytics/daily-totals"]}

@app.get("/analytics/daily-totals")
def daily_totals():
    with conn.cursor() as cur:
        cur.execute("""
            SELECT date,
                   SUM(calories) AS total_calories,
                   SUM(protein) AS total_protein,
                   SUM(fat) AS total_fat,
                   SUM(carbs) AS total_carbs
            FROM meals_raw
            GROUP BY date
            ORDER BY date DESC
            LIMIT 30;
        """)
        rows = cur.fetchall()

        return [
            {
                "date": r[0],
                "calories": r[1],
                "protein": r[2],
                "fat": r[3],
                "carbs": r[4],
            }
            for r in rows
        ]
    