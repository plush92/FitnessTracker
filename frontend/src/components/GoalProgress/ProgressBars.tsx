// src/components/GoalProgress/ProgressBars.tsx
import React from "react";

interface GoalProgressProps {
  caloriesActual: number;
  caloriesGoal: number;
  proteinActual: number;
  proteinGoal: number;
}

const ProgressBars: React.FC<GoalProgressProps> = ({
  caloriesActual,
  caloriesGoal,
  proteinActual,
  proteinGoal,
}) => {
  const caloriePercentage = Math.min((caloriesActual / caloriesGoal) * 100, 100);
  const proteinPercentage = Math.min((proteinActual / proteinGoal) * 100, 100);

  return (
    <div className="progress-section">
      <div className="progress-item">
        <div className="progress-label">
          <span>Daily Calorie Intake</span>
          <span className="progress-values">
            {Math.round(caloriesActual)} / {caloriesGoal} kcal
          </span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar"
            style={{ width: `${caloriePercentage}%` }}
          />
        </div>
      </div>

      <div className="progress-item">
        <div className="progress-label">
          <span>Daily Protein Intake</span>
          <span className="progress-values">
            {Math.round(proteinActual)} / {proteinGoal} g
          </span>
        </div>
        <div className="progress-bar-container">
          <div 
            className="progress-bar"
            style={{ width: `${proteinPercentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressBars;