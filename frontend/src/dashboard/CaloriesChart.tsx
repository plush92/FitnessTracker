// src/components/dashboard/CaloriesChart.tsx
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

export interface CaloriesData {
  date: string;
  calories: number;
}

interface CaloriesChartProps {
  data: CaloriesData[];
  height?: number;
}

const CaloriesChart: React.FC<CaloriesChartProps> = ({ data, height = 300 }) => {
  return (
    <div className="chart-container">
      <h2 style={{ fontSize: '1.125rem', fontWeight: '500', marginBottom: '1rem' }}>Calories Over Time</h2>
      <ResponsiveContainer width="100%" height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip
            contentStyle={{ backgroundColor: "white", borderRadius: 8, padding: 8 }}
          />
          <Line
            type="monotone"
            dataKey="calories"
            stroke="#4F46E5"
            strokeWidth={3}
            dot={{ r: 4 }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CaloriesChart;