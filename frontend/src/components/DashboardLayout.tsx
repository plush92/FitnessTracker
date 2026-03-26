// src/components/DashboardLayout.tsx
import React from "react";
import SummaryCards from "../dashboard/SummaryCards";
import CaloriesChart from "../dashboard/CaloriesChart";
import MacrosChart from "../dashboard/MacrosChart";
import DailyTable from "../dashboard/DailyTable";
import MealsTable from "../dashboard/MealsTable";
import ProgressBars from "../components/GoalProgress/ProgressBars";
import Loader from "../ui/Loader";
import { SummaryStats, CaloriesData, MacrosData, DailyStats, Meal, UserGoals } from "../types/dashboard";

interface DashboardLayoutProps {
  loading?: boolean;
  summaryData: SummaryStats;
  caloriesData: CaloriesData[];
  macrosData: MacrosData[];
  dailyStats: DailyStats[];
  meals: Meal[];
  userGoals: UserGoals;
  onAddMeal?: () => void;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  loading = false,
  summaryData,
  caloriesData,
  macrosData,
  dailyStats,
  meals,
  userGoals,
  onAddMeal,
}) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader size={60} />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Top Summary Cards */}
      <SummaryCards data={summaryData} />

      {/* Charts */}
      <div className="charts-grid">
        <CaloriesChart data={caloriesData} height={300} />
        <MacrosChart data={macrosData} height={300} />
      </div>

      {/* Progress Bars */}
      <ProgressBars 
        caloriesActual={summaryData.caloriesToday}
        caloriesGoal={userGoals.dailyCalories}
        proteinActual={summaryData.proteinToday}
        proteinGoal={userGoals.dailyProtein}
      />

      {/* Tables Grid */}
      <div className="tables-grid">
        {/* Daily Nutrition Table */}
        <div className="table-section">
          <h3>Daily Nutrition</h3>
          <DailyTable data={dailyStats} />
        </div>

        {/* Meals Table */}
        <div className="table-section">
          <div className="section-header">
            <h3>Meals</h3>
            {onAddMeal && (
              <button
                onClick={onAddMeal}
                className="add-meal-button"
              >
                <span>+</span>
                Add Meal
              </button>
            )}
          </div>
          <MealsTable data={meals} />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;