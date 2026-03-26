// Types for dashboard-related data structures

export interface SummaryStats {
  caloriesToday: number;
  proteinToday: number;
  avgCalories: number;
  proteinAvg: number;
  consistencyScore: number; // 0-100
}

export interface UserGoals {
  dailyCalories: number;
  dailyProtein: number;
  dailyCarbs: number;
  dailyFat: number;
}

export interface CaloriesData {
  date: string;
  calories: number;
}

export interface MacrosData {
  date: string; // Added date property for chart component
  protein: number;
  carbs: number;
  fat: number;
}

export interface DailyStats {
  date: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

export interface Meal {
  id: number;
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
}

// Types for meal creation
export interface MealCreate {
  foodName: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  mealDate: string;
  mealTime: string;
  mealType: string;
  notes?: string;
}

export interface MealResponse {
  id: number;
  message: string;
}