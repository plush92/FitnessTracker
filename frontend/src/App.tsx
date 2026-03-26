// src/App.tsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import DashboardLayout from "./components/DashboardLayout";
import AddMealModal, { MealFormData } from "./components/MealEntry/AddMealModal";
import { SummaryStats, CaloriesData, MacrosData, DailyStats, Meal, MealCreate, MealResponse, UserGoals } from "./types/dashboard";
import Loader from "./ui/Loader";

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [isAddMealModalOpen, setIsAddMealModalOpen] = useState(false);
  const [addMealLoading, setAddMealLoading] = useState(false);
  const [summaryData, setSummaryData] = useState<SummaryStats>({
    caloriesToday: 0,
    proteinToday: 0,
    avgCalories: 0,
    proteinAvg: 0,
    consistencyScore: 0,
  });
  const [caloriesData, setCaloriesData] = useState<CaloriesData[]>([]);
  const [macrosData, setMacrosData] = useState<MacrosData[]>([]);
  const [dailyStats, setDailyStats] = useState<DailyStats[]>([]);
  const [meals, setMeals] = useState<Meal[]>([]);
  const [userGoals, setUserGoals] = useState<UserGoals>({
    dailyCalories: 2500,
    dailyProtein: 150,
    dailyCarbs: 250,
    dailyFat: 83,
  });

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
        goalsRes,
      ] = await Promise.all([
        fetch("/api/summary"),
        fetch("/api/calories"),
        fetch("/api/macros"),
        fetch("/api/daily-stats"),
        fetch("/api/meals"),
        fetch("/api/goals"),
      ]);

      const summaryJson = await summaryRes.json();
      const caloriesJson = await caloriesRes.json();
      const macrosJson = await macrosRes.json();
      const dailyJson = await dailyRes.json();
      const mealsJson = await mealsRes.json();
      const goalsJson = await goalsRes.json();

      setSummaryData(summaryJson);
      setCaloriesData(caloriesJson);
      // Transform macros single object to array format for chart
      const macrosArray = [{
        date: "Current Period", // or use today's date
        protein: macrosJson.protein || 0,
        carbs: macrosJson.carbs || 0,
        fat: macrosJson.fat || 0,
      }];
      setMacrosData(macrosArray);
      setDailyStats(dailyJson);
      setMeals(mealsJson);
      setUserGoals(goalsJson);
    } catch (error) {
      console.error("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMeal = async (mealData: MealFormData): Promise<void> => {
    setAddMealLoading(true);
    
    try {
      const mealCreate: MealCreate = {
        foodName: mealData.foodName,
        calories: mealData.calories,
        protein: mealData.protein,
        carbs: mealData.carbs,
        fat: mealData.fat,
        mealDate: mealData.mealDate,
        mealTime: mealData.mealTime,
        mealType: mealData.mealType,
        notes: mealData.notes
      };

      const response = await fetch("/api/meals", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mealCreate),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || "Failed to add meal");
      }

      const result: MealResponse = await response.json();
      console.log("Meal added successfully:", result);
      
      // Refresh dashboard data to show new meal
      await fetchDashboardData();
      
    } catch (error) {
      console.error("Error adding meal:", error);
      throw error; // Re-throw to let modal handle error display
    } finally {
      setAddMealLoading(false);
    }
  };

  useEffect(() => {
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
        userGoals={userGoals}
        onAddMeal={() => setIsAddMealModalOpen(true)}
      />
      
      <AddMealModal
        isOpen={isAddMealModalOpen}
        onClose={() => setIsAddMealModalOpen(false)}
        onSubmit={handleAddMeal}
        loading={addMealLoading}
      />
    </div>
  );
};

export default App;