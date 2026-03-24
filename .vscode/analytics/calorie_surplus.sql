SELECT ROUND(AVG(total_calories - 2000)::numeric, 1) AS avg_daily_surplus
FROM (
        SELECT date,
            SUM(calories) AS total_calories
        FROM meals_transformed
        GROUP BY date
    ) daily;