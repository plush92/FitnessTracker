// src/components/dashboard/SummaryCards.tsx
import React from "react";
import Card from "../ui/Card";
import { SummaryStats } from "../types/dashboard";

interface SummaryCardsProps {
  data: SummaryStats;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ data }) => {
  return (
    <div className="summary-cards-grid">
      <Card title="Calories Today" value={`${data.caloriesToday} kcal`} />
      <Card title="Avg Calories" value={`${data.avgCalories} kcal`} />
      <Card title="Protein Avg (g)" value={`${data.proteinAvg} g`} />
      <Card title="Consistency Score" value={`${data.consistencyScore}%`} />
    </div>
  );
};

export default SummaryCards;