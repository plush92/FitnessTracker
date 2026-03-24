WITH meal_nutrition AS (...)
SELECT EXTRACT(
        HOUR
        FROM created_at
    ) AS hour,
    COUNT(*) AS meals
FROM meal_nutrition
GROUP BY hour
ORDER BY hour;