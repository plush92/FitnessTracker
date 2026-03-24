WITH meal_nutrition AS (...)
SELECT EXTRACT(
        HOUR
        FROM created_at
    ) AS hour,
    SUM(protein) AS total_protein
FROM meal_nutrition
GROUP BY hour
ORDER BY hour;