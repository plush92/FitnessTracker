WITH meal_nutrition AS (...)
SELECT name,
    SUM(protein) / NULLIF(SUM(calories), 0) AS protein_efficiency
FROM meal_nutrition
GROUP BY name
ORDER BY protein_efficiency DESC;