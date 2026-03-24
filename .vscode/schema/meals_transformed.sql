CREATE TABLE IF NOT EXISTS meals_transformed (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    food_name TEXT NOT NULL,
    calories INT,
    protein FLOAT,
    fat FLOAT,
    carbs FLOAT,
    protein_per_calorie FLOAT,
    meal_size_category TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);