-- =========================
-- PROTEIN DENSITY PER MEAL
-- =========================
CREATE OR REPLACE VIEW protein_density_meals AS WITH meal_nutrition AS (
        SELECT id,
            date,
            food_name,
            calories,
            protein,
            fat,
            carbs,
            protein_per_calorie,
            meal_size_category
        FROM meals_transformed
    )
SELECT id,
    date,
    food_name,
    calories,
    protein,
    fat,
    carbs,
    protein_per_calorie,
    meal_size_category
FROM meal_nutrition
ORDER BY protein_per_calorie DESC;