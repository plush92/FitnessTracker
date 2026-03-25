// src/components/dashboard/SummaryCards.tsx
import React from "react";
import Card from "../ui/Card";
import { SummaryStats } from "../types/dashboard";

interface SummaryCardsProps {
  data: SummaryStats;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mb-6">
      <Card title="Calories Today" value={data.caloriesToday} />
      <Card title="Avg Calories" value={data.avgCalories} />
      <Card title="Protein Avg (g)" value={data.proteinAvg} />
      <Card title="Consistency Score (%)" value={data.consistencyScore} />
    </div>
  );
};

export default SummaryCards;