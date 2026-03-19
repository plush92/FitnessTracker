CREATE TABLE meals_raw (
    id SERIAL PRIMARY KEY,
    meal_date TEXT,
    food_name TEXT,
    calories TEXT,
    protein TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
CREATE TABLE workouts_raw (
    id SERIAL PRIMARY KEY,
    workout_date TEXT,
    exercise TEXT,
    sets TEXT,
    reps TEXT,
    weight TEXT,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO meals_raw (meal_date, food_name, calories, protein)
VALUES ('2026-03-16', 'chicken breast', '250', '40g'),
    ('03/16/2026', 'protein shake', '160 kcal', '30'),
    ('March 16 2026', 'eggs', NULL, '18g'),
    ('2026-03-16', 'bread', '120', NULL);
INSERT INTO workouts_raw (workout_date, exercise, sets, reps, weight)
VALUES ('2026-03-16', 'bench press', '3', '10', '135'),
    (
        '03/16/2026',
        'bench press',
        'three',
        '8',
        '145 lbs'
    ),
    ('2026-03-16', 'squat', '4', '5', NULL);
INSERT INTO meals_raw (meal_date, food_name, calories, protein)
VALUES -- Monday
    (
        '2026-03-16',
        'egg scramble (2 eggs, egg whites, vegetables, avocado oil)',
        '400',
        '35g'
    ),
    (
        '03/16/2026',
        'ham sandwich (daves bread, swiss, mayo)',
        '350 kcal',
        '25'
    ),
    (
        'March 16 2026',
        'protein shake (fruit + oat milk)',
        '250',
        '32g'
    ),
    (
        '2026-03-16',
        'grilled chicken, rice, vegetables',
        '500',
        '45g'
    ),
    (
        '2026-03-16',
        'greek yogurt chobani cherry',
        '120',
        '12g'
    ),
    -- Tuesday
    (
        '2026-03-17',
        'egg scramble breakfast',
        '400',
        '35g'
    ),
    ('03/17/2026', 'ham sandwich lunch', '350', '25g'),
    (
        'March 17 2026',
        'protein shake',
        '250 kcal',
        '32'
    ),
    (
        '2026-03-17',
        'turkey meatballs (7)',
        '450',
        '40g'
    ),
    ('2026-03-17', 'greek yogurt snack', NULL, '12g'),
    -- Wednesday
    (
        '2026-03-18',
        'egg scramble breakfast',
        '400',
        '35g'
    ),
    (
        '03/18/2026',
        'ham sandwich lunch',
        '350 kcal',
        '25'
    ),
    ('March 18 2026', 'protein shake', '250', '32g'),
    (
        '2026-03-18',
        'grilled chicken, rice, vegetables',
        '500',
        '45g'
    ),
    ('2026-03-18', 'greek yogurt snack', '120', NULL),
    -- Thursday
    (
        '2026-03-19',
        'egg scramble breakfast',
        '400',
        '35g'
    ),
    ('03/19/2026', 'ham sandwich lunch', '350', '25'),
    (
        'March 19 2026',
        'protein shake',
        '250 kcal',
        '32g'
    ),
    (
        '2026-03-19',
        'turkey meatballs (7)',
        '450',
        '40'
    ),
    ('2026-03-19', 'greek yogurt snack', '120', '12g'),
    -- Friday
    (
        '2026-03-20',
        'egg scramble breakfast',
        '400',
        '35g'
    ),
    ('03/20/2026', 'ham sandwich lunch', '350', '25g'),
    ('March 20 2026', 'protein shake', '250', '32'),
    (
        '2026-03-20',
        'grilled chicken, rice, vegetables',
        '500 kcal',
        '45g'
    ),
    ('2026-03-20', 'greek yogurt snack', NULL, '12g'),
    -- Saturday
    (
        '2026-03-21',
        'egg scramble breakfast',
        '400',
        '35'
    ),
    (
        '03/21/2026',
        'ham sandwich lunch',
        '350 kcal',
        '25'
    ),
    ('March 21 2026', 'protein shake', '250', '32g'),
    (
        '2026-03-21',
        'turkey meatballs (7)',
        '450',
        '40g'
    ),
    ('2026-03-21', 'greek yogurt snack', '120', '12'),
    -- Sunday
    (
        '2026-03-22',
        'egg scramble breakfast',
        '400',
        '35g'
    ),
    ('03/22/2026', 'ham sandwich lunch', '350', '25'),
    (
        'March 22 2026',
        'protein shake',
        '250 kcal',
        '32g'
    ),
    (
        '2026-03-22',
        'grilled chicken, rice, vegetables',
        '500',
        '45'
    ),
    ('2026-03-22', 'greek yogurt snack', '120', '12g');
INSERT INTO workouts_raw (workout_date, exercise, sets, reps, weight)
VALUES -- Monday (Push)
    ('2026-03-16', 'bench press', '3', '8-10', '135'),
    (
        '03/16/2026',
        'incline dumbbell press',
        '3',
        '10',
        '50 lbs'
    ),
    ('2026-03-16', 'shoulder press', '3', '10', '95'),
    ('2026-03-16', 'lateral raises', '3', '12', '20'),
    (
        '2026-03-16',
        'tricep pushdown',
        '3',
        '12',
        'stack'
    ),
    -- Tuesday (Pull)
    ('2026-03-17', 'lat pulldown', '3', '10', '140'),
    ('03/17/2026', 'barbell row', '3', '8', '135 lbs'),
    (
        '2026-03-17',
        'seated cable row',
        '3',
        '10',
        '120'
    ),
    ('2026-03-17', 'bicep curl', '3', '12', '30'),
    (
        '2026-03-17',
        'hammer curl',
        'three',
        '10',
        '25 lbs'
    ),
    -- Wednesday (Legs)
    ('2026-03-18', 'squat', '4', '5', '185'),
    (
        '03/18/2026',
        'romanian deadlift',
        '3',
        '8',
        '155 lbs'
    ),
    ('2026-03-18', 'leg press', '3', '10', '250'),
    ('2026-03-18', 'leg curl', '3', '12', 'machine'),
    ('2026-03-18', 'calf raises', '4', '15', NULL),
    -- Thursday (Rest)
    ('2026-03-19', 'rest day', NULL, NULL, NULL),
    -- Friday (Push)
    ('2026-03-20', 'bench press', '3', '8', '140'),
    (
        '03/20/2026',
        'incline dumbbell press',
        '3',
        '10',
        '55 lbs'
    ),
    ('2026-03-20', 'shoulder press', '3', '10', '100'),
    ('2026-03-20', 'lateral raises', '3', '12', '25'),
    (
        '2026-03-20',
        'tricep pushdown',
        '3',
        '12',
        'stack'
    ),
    -- Saturday (Pull)
    ('2026-03-21', 'lat pulldown', '3', '10', '145'),
    ('03/21/2026', 'barbell row', '3', '8', '140 lbs'),
    (
        '2026-03-21',
        'seated cable row',
        '3',
        '10',
        '125'
    ),
    ('2026-03-21', 'bicep curl', '3', '12', '35'),
    ('2026-03-21', 'hammer curl', '3', '10', '30'),
    -- Sunday (Legs)
    ('2026-03-22', 'squat', '4', '5', '195'),
    (
        '03/22/2026',
        'romanian deadlift',
        '3',
        '8',
        '165 lbs'
    ),
    ('2026-03-22', 'leg press', '3', '10', '270'),
    ('2026-03-22', 'leg curl', '3', '12', 'machine'),
    ('2026-03-22', 'calf raises', '4', '15', NULL);