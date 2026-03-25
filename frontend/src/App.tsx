// src/App.tsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DashboardLayout from "./components/DashboardLayout";
import { SummaryStats, CaloriesData, MacrosData, DailyStats, Meal } from "./types/dashboard";
import Loader from "./ui/Loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [summaryData, setSummaryData] = useState<SummaryStats>({
    caloriesToday: 0,
    avgCalories: 0,
    proteinAvg: 0,
    consistencyScore: 0,
  });
  const [caloriesData, setCaloriesData] = useState<CaloriesData[]>([]);
  const [macrosData, setMacrosData] = useState<MacrosData[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        setLoading(true);

        // Example: fetch all endpoints (adjust URLs to your FastAPI)
        const [
          summaryRes,
          caloriesRes,
          macrosRes,
          dailyRes,
          mealsRes,
        ] = await Promise.all([
          fetch("/api/summary"),
          fetch("/api/calories"),
          fetch("/api/macros"),
          fetch("/api/daily-stats"),
          fetch("/api/meals"),
        ]);

        const summaryJson = await summaryRes.json();
        const caloriesJson = await caloriesRes.json();
        const macrosJson = await macrosRes.json();
        const dailyJson = await dailyRes.json();
        const mealsJson = await mealsRes.json();

        setSummaryData(summaryJson);
        setCaloriesData(caloriesJson);
        setMacrosData(macrosJson);
        setDailyStats(dailyJson);
        setMeals(mealsJson);
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Loader size={60} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header subtitle="Your Fitness Dashboard" />
      <DashboardLayout
        loading={loading}
        summaryData={summaryData}
        caloriesData={caloriesData}
        macrosData={macrosData}
        dailyStats={dailyStats}
        meals={meals}
      />
    </div>
  );
};

export default App;