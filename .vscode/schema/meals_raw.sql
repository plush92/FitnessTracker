CREATE TABLE meals_raw (
    id SERIAL PRIMARY KEY,
    date DATE,
    food_name TEXT,
    calories INT,
    protein INT,
    fat FLOAT,
    carbs FLOAT,
    notes TEXT,
    created_at TIMESTAMP
);