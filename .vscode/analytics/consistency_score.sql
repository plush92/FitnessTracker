SELECT ROUND(STDDEV(total_calories)::numeric, 1) AS calorie_stddev
FROM (
        SELECT date,
            SUM(calories) AS total_calories
        FROM meals_transformed
        GROUP BY date
    ) daily;