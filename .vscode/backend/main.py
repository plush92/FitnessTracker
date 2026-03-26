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
    allow_origins=["http://localhost:3000", "http://localhost:3001", "http://127.0.0.1:3000", "http://127.0.0.1:3001"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Database connection function
def get_db_connection():
    return psycopg2.connect(
        dbname=os.getenv("DB_NAME", "fitness_pipeline"),
        user=os.getenv("DB_USER", "postgres"),
        password=os.getenv("DB_PASSWORD"),
        host=os.getenv("DB_HOST", "localhost"),
        port=os.getenv("DB_PORT", 5435)
    )

@app.get("/")
def root():
    return {"message": "Fitness Tracker API", "endpoints": [
        "/analytics/daily-totals", 
        "/api/summary", 
        "/api/calories", 
        "/api/macros", 
        "/api/daily-stats", 
        "/api/meals"
    ]}

@app.get("/api/summary")
def get_summary():
    """Get summary statistics for dashboard cards"""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            # Get today's calories
            cur.execute("""
                SELECT COALESCE(SUM(calories), 0) as calories_today
                FROM meals_raw 
                WHERE date = CURRENT_DATE
            """)
            calories_today = cur.fetchone()[0]
            
            # Get average calories over last 30 days
            cur.execute("""
                SELECT COALESCE(AVG(daily_calories), 0) as avg_calories
                FROM (
                    SELECT date, SUM(calories) as daily_calories
                    FROM meals_raw 
                    WHERE date >= CURRENT_DATE - INTERVAL '30 days'
                    GROUP BY date
                ) daily_totals
            """)
            avg_calories = cur.fetchone()[0]
            
            # Get average protein over last 30 days
            cur.execute("""
                SELECT COALESCE(AVG(daily_protein), 0) as avg_protein
                FROM (
                    SELECT date, SUM(protein) as daily_protein
                    FROM meals_raw 
                    WHERE date >= CURRENT_DATE - INTERVAL '30 days'
                    GROUP BY date
                ) daily_totals
            """)
            avg_protein = cur.fetchone()[0]
            
            # Simple consistency score (days with logged meals / 30 * 100)
            cur.execute("""
                SELECT COUNT(DISTINCT date) as days_logged
                FROM meals_raw 
                WHERE date >= CURRENT_DATE - INTERVAL '30 days'
            """)
            days_logged = cur.fetchone()[0]
            consistency_score = (days_logged / 30.0) * 100
            
            return {
                "caloriesToday": int(calories_today),
                "avgCalories": int(avg_calories),
                "proteinAvg": int(avg_protein),
                "consistencyScore": int(consistency_score)
            }

@app.get("/api/calories")
def get_calories():
    """Get calories data over time for charts"""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT date, SUM(calories) AS calories
                FROM meals_raw
                WHERE date >= CURRENT_DATE - INTERVAL '30 days'
                GROUP BY date
                ORDER BY date ASC
            """)
            rows = cur.fetchall()

            return [
                {
                    "date": str(r[0]),
                    "calories": int(r[1])
                }
                for r in rows
            ]

@app.get("/api/macros")
def get_macros():
    """Get macros breakdown for charts"""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT 
                    SUM(protein) as total_protein,
                    SUM(carbs) as total_carbs,
                    SUM(fat) as total_fat
                FROM meals_raw
                WHERE date >= CURRENT_DATE - INTERVAL '7 days'
            """)
            row = cur.fetchone()
            
            return {
                "protein": int(row[0] or 0),
                "carbs": int(row[1] or 0) ,
                "fat": int(row[2] or 0)
            }

@app.get("/api/daily-stats")
def get_daily_stats():
    """Get daily nutrition stats for table"""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT 
                    date,
                    SUM(calories) AS calories,
                    SUM(protein) AS protein,
                    SUM(carbs) AS carbs,
                    SUM(fat) AS fat
                FROM meals_raw
                WHERE date >= CURRENT_DATE - INTERVAL '14 days'
                GROUP BY date
                ORDER BY date DESC
            """)
            rows = cur.fetchall()

            return [
                {
                    "date": str(r[0]),
                    "calories": int(r[1]),
                    "protein": int(r[2]),
                    "carbs": int(r[3]),
                    "fat": int(r[4])
                }
                for r in rows
            ]

@app.get("/api/meals")
def get_meals():
    """Get individual meals data"""
    with get_db_connection() as conn:
        with conn.cursor() as cur:
            cur.execute("""
                SELECT 
                    id, food_name, calories, protein, carbs, fat, 
                    TO_CHAR(created_at, 'HH24:MI') as time
                FROM meals_raw
                WHERE date >= CURRENT_DATE - INTERVAL '7 days'
                ORDER BY created_at DESC
                LIMIT 20
            """)
            rows = cur.fetchall()

            return [
                {
                    "id": r[0],
                    "name": r[1],
                    "calories": int(r[2]),
                    "protein": int(r[3]),
                    "carbs": int(r[4]),
                    "fat": int(r[5]),
                    "time": r[6] or "00:00"
                }
                for r in rows
            ]

@app.get("/analytics/daily-totals")
def daily_totals():
    with get_db_connection() as conn:
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
    