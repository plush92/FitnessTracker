WITH meal_nutrition AS (...)
SELECT name,
    COUNT(*) AS times_eaten
FROM meal_nutrition
GROUP BY name
ORDER BY times_eaten DESC;