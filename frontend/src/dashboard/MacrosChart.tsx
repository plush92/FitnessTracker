// src/components/dashboard/MacrosChart.tsx
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export interface MacrosData {
  date: string; // e.g. "2026-03-24"
  protein: number;
  carbs: number;
  fat: number;
}

interface MacrosChartProps {
  data: MacrosData[];
  height?: number;
}

const MacrosChart: React.FC<MacrosChartProps> = ({ data, height = 300 }) => {
  return (
    <div className="chart-container">
      <h2 className="text-lg font-medium mb-4">Macronutrient Breakdown</h2>
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: "white", borderRadius: 8, padding: 8 }}
          />
          <Legend />
          <Bar dataKey="protein" stackId="a" fill="#4F46E5" /> {/* Primary */}
          <Bar dataKey="carbs" stackId="a" fill="#10B981" />   {/* Secondary */}
          <Bar dataKey="fat" stackId="a" fill="#F59E0B" />     {/* Accent */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MacrosChart;