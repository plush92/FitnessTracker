-- =========================
-- AVG MACROS PER MEAL SIZE
-- =========================
CREATE OR REPLACE VIEW avg_macros_per_meal AS WITH meal_totals AS (
        -- Step 1: Ensure clean data per meal
        SELECT meal_size_category,
            calories,
            protein,
            fat,
            carbs
        FROM meals_transformed
        WHERE calories IS NOT NULL
    ) -- Step 2: Aggregate averages by meal size
SELECT meal_size_category,
    ROUND(AVG(calories)::numeric, 1) AS avg_calories,
    ROUND(AVG(protein)::numeric, 1) AS avg_protein,
    ROUND(AVG(fat)::numeric, 1) AS avg_fat,
    ROUND(AVG(carbs)::numeric, 1) AS avg_carbs
FROM meal_totals
GROUP BY meal_size_category
ORDER BY meal_size_category;