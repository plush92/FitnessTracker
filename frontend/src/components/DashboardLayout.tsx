// src/components/DashboardLayout.tsx
import React from "react";
import SummaryCards, { SummaryStats } from "./dashboard/SummaryCards";
import CaloriesChart, { CaloriesData } from "./dashboard/CaloriesChart";
import MacrosChart, { MacrosData } from "./dashboard/MacrosChart";
import DailyTable, { DailyStats } from "./dashboard/DailyTable";
import MealsTable, { Meal } from "./dashboard/MealsTable";
import Loader from "./ui/Loader";

interface DashboardLayoutProps {
  loading?: boolean;
  summaryData: SummaryStats;
  caloriesData: CaloriesData[];
  macrosData: MacrosData[];
  dailyStats: DailyStats[];
  meals: Meal[];
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  loading = false,
  summaryData,
  caloriesData,
  macrosData,
  dailyStats,
  meals,
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CaloriesChart data={caloriesData} height={300} />
        <MacrosChart data={macrosData} height={300} />
      </div>

      {/* Daily Stats Table */}
      <div>
        <h2 className="text-lg font-medium mb-4">Daily Nutrition</h2>
        <DailyTable data={dailyStats} />
      </div>

      {/* Meals Table */}
      <div>
        <h2 className="text-lg font-medium mb-4">Meals</h2>
        <MealsTable data={meals} />
      </div>
    </div>
  );
};

export default DashboardLayout;