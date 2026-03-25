// src/components/dashboard/DailyTable.tsx
import React from "react";
import Table from "../ui/Table";

export interface DailyStats {
  date: string; // e.g. "2026-03-24"
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  consistencyScore: number; // 0-100
}

interface DailyTableProps {
  data: DailyStats[];
}

const DailyTable: React.FC<DailyTableProps> = ({ data }) => {
  const columns = [
    { key: "date", header: "Date" },
    { key: "calories", header: "Calories" },
    { key: "protein", header: "Protein (g)" },
    { key: "carbs", header: "Carbs (g)" },
    { key: "fat", header: "Fat (g)" },
    { key: "consistencyScore", header: "Consistency (%)" },
  ];

  return <Table columns={columns} data={data} />;
};

export default DailyTable;