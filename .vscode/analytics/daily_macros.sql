SELECT date,
    SUM(calories) AS total_calories,
    SUM(protein) AS total_protein,
    SUM(fat) AS total_fat,
    SUM(carbs) AS total_carbs
FROM meals_transformed
GROUP BY date
ORDER BY date;