SELECT date,
    SUM(calories) AS total_calories,
    SUM(calories) - 2000 AS calorie_surplus
FROM meals_transformed
GROUP BY date
ORDER BY date;