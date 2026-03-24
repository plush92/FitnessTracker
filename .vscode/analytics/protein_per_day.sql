WITH meal_nutrition AS (...)
SELECT date,
    SUM(protein) AS protein
FROM meal_nutrition
GROUP BY date
ORDER BY date;