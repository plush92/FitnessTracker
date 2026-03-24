WITH meal_nutrition AS (...)
SELECT date,
    COUNT(DISTINCT food_id) AS unique_foods
FROM meal_nutrition
GROUP BY date
ORDER BY date;