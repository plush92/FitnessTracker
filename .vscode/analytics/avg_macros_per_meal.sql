SELECT ROUND(AVG(calories)::numeric, 1) AS avg_calories,
    ROUND(AVG(protein)::numeric, 1) AS avg_protein,
    ROUND(AVG(fat)::numeric, 1) AS avg_fat,
    ROUND(AVG(carbs)::numeric, 1) AS avg_carbs
FROM meals_transformed;