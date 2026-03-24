WITH meal_nutrition AS (...),
daily AS (
    SELECT date,
        SUM(protein) AS total_protein
    FROM meal_nutrition
    GROUP BY date
)
SELECT date,
    total_protein,
    CASE
        WHEN total_protein >= 150 THEN 1
        ELSE 0
    END AS hit_target
FROM daily;