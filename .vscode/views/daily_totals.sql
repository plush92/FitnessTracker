-- =========================
-- DAILY TOTALS
-- =========================
CREATE OR REPLACE VIEW daily_totals AS WITH daily_data AS (
        SELECT date,
            calories,
            protein,
            fat,
            carbs
        FROM meals_transformed
    )
SELECT date,
    SUM(calories) AS total_calories,
    SUM(protein) AS total_protein,
    SUM(fat) AS total_fat,
    SUM(carbs) AS total_carbs
FROM daily_data
GROUP BY date
ORDER BY date;