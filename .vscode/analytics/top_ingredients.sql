WITH meal_nutrition AS (...)
SELECT name,
    SUM(grams) AS total_grams
FROM meal_nutrition
GROUP BY name
ORDER BY total_grams DESC
LIMIT 10;