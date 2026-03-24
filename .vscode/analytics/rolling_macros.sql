WITH meal_nutrition AS (...),
daily AS (
    SELECT date,
        SUM(calories) AS calories,
        SUM(protein) AS protein
    FROM meal_nutrition
    GROUP BY date
)
SELECT date,
    AVG(calories) OVER (
        ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS calories_7d_avg,
    AVG(protein) OVER (
        ORDER BY date ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
    ) AS protein_7d_avg
FROM daily;