WITH meal_nutrition AS (...)
SELECT id,
    name,
    calories,
    protein,
    (protein / NULLIF(calories, 0)) * 100 AS protein_density_score
FROM meal_nutrition
ORDER BY protein_density_score DESC;