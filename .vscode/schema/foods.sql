CREATE TABLE foods (
    id SERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    -- base unit: per 100g (standard for scaling)
    calories_per_100g FLOAT NOT NULL,
    protein_per_100g FLOAT NOT NULL,
    fat_per_100g FLOAT NOT NULL,
    carbs_per_100g FLOAT NOT NULL,
    -- optional metadata (future-proofing)
    category TEXT,
    created_at TIMESTAMP DEFAULT NOW()
);