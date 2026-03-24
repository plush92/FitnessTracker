WITH meal_nutrition AS (...)
SELECT CASE
        WHEN calories < 300 THEN 'small'
        WHEN calories < 700 THEN 'medium'
        ELSE 'large'
    END AS meal_size,
    COUNT(*) AS count
FROM meal_nutrition
GROUP BY meal_size;