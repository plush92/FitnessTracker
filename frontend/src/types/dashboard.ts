// Types for dashboard-related data structures

export interface SummaryStats {
  caloriesToday: number;
  avgCalories: number;
  proteinAvg: number;
  consistencyScore: number; // 0-100
}

export interface CaloriesData {
  date: string;
  calories: number;
}

export interface MacrosData {
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