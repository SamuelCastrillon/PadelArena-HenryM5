import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const MatchStatsChart = ({
  wins,
  losses,
}: {
  wins: number;
  losses: number;
}) => {
  const data = {
    labels: ["Partidos Ganados", "Partidos Perdidos"],
    datasets: [
      {
        label: "Partidos",
        data: [wins, losses],
        backgroundColor: ["#4CAF50", "#F44336"], // Verde para ganados, rojo para perdidos
        hoverBackgroundColor: ["#45a049", "#e35d5b"],
      },
    ],
  };

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl radhiumz mb-4 text-center">
        Estadísticas de Partidos
      </h3>
      <Pie data={data} />
    </div>
  );
};

export default MatchStatsChart;
