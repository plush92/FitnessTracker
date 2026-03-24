WITH meal_nutrition AS (...)
SELECT name,
    protein,
    calories
FROM meal_nutrition
ORDER BY protein DESC
LIMIT 10;