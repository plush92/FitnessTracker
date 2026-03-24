WITH meal_nutrition AS (...),
daily_calories AS (
    SELECT date,
        SUM(calories) AS calories
    FROM meal_nutrition
    GROUP BY date
)
SELECT w.date,
    w.weight,
    d.calories
FROM weight_logs w
    JOIN daily_calories d ON w.date = d.date
ORDER BY w.date;