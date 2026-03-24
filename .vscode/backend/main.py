from fastapi import FastAPI
import psycopg2

app = FastAPI()

conn = psycopg2.connect(
    dbname="fitness_pipeline",
    user="postgres",
    password="Apple24!",
    host="localhost",
    port=5435
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
    