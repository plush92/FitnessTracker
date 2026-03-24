WITH meal_nutrition AS (...)
SELECT date,
    SUM(calories) AS calories,
    SUM(protein) AS protein,
    SUM(fat) AS fat,
    SUM(carbs) AS carbs
FROM meal_nutrition
GROUP BY date
ORDER BY date;