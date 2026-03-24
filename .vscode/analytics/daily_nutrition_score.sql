WITH daily AS (
    SELECT date,
        SUM(calories) AS total_calories,
        SUM(protein) AS total_protein
    FROM meals_transformed
    GROUP BY date
),
scored AS (
    SELECT date,
        total_calories,
        total_protein,
        -- Protein score (max 50)
        LEAST((total_protein / 150.0) * 50, 50) AS protein_score,
        -- Calorie score (max 50)
        LEAST(
            GREATEST(
                50 - (ABS(total_calories - 2000) / 2000.0) * 50,
                0
            ),
            50
        ) AS calorie_score
    FROM daily
)
SELECT date,
    total_calories,
    total_protein,
    ROUND((protein_score + calorie_score)::numeric, 1) AS nutrition_score
FROM scored
ORDER BY date;