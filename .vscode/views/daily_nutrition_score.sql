-- =========================
-- DAILY NUTRITION SCORE
-- =========================
CREATE OR REPLACE VIEW daily_nutrition_score AS WITH meal_summaries AS (
        SELECT date,
            SUM(calories) AS total_calories,
            SUM(protein) AS total_protein,
            SUM(fat) AS total_fat,
            SUM(carbs) AS total_carbs,
            COUNT(*) AS meal_count
        FROM meals_transformed
        GROUP BY date
    ),
    score_calc AS (
        SELECT date,
            total_calories,
            total_protein,
            total_fat,
            total_carbs,
            meal_count,
            ROUND(
                (
                    LEAST(total_protein / NULLIF(total_calories, 0), 0.3) * 50
                ) + -- protein contribution
                (
                    CASE
                        WHEN total_calories BETWEEN 1800 AND 2200 THEN 50
                        ELSE 30
                    END
                ),
                -- calorie balance
                0
            ) AS nutrition_score
        FROM meal_summaries
    )
SELECT *
FROM score_calc
ORDER BY date;