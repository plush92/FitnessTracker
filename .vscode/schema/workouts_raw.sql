CREATE TABLE workouts_raw (
    id SERIAL PRIMARY KEY,
    workout_date TEXT,
    exercise TEXT,
    sets TEXT,
    reps TEXT,
    weight TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);