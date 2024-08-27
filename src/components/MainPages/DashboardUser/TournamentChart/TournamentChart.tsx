import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const TournamentLineChart = ({
  gano,
  perdio,
}: {
  gano: number[];
  perdio: number[];
}) => {
  const data = {
    labels: [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre",
    ],
    datasets: [
      {
        label: "Torneos Ganados",
        data: gano,
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#4CAF50",
        pointBorderColor: "#4CAF50",
        pointHoverRadius: 8,
      },
      {
        label: "Torneos Perdidos",
        data: perdio,
        borderColor: "#F44336",
        backgroundColor: "rgba(244, 67, 54, 0.2)",
        tension: 0.4,
        fill: true,
        pointBackgroundColor: "#F44336",
        pointBorderColor: "#F44336",
        pointHoverRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
        labels: {
          color: "#333",
          font: {
            size: 14,
            family: "sfRegular",
          },
          padding: 20,
        },
      },
      title: {
        display: true,
        text: "Estadísticas de Torneos Ganados y Perdidos",
        color: "#1F2937",
        font: {
          size: 20,
          family: "radhiumz",
          weight: "bold" as const, // Corregido el tipo de 'weight'
        },
        padding: {
          top: 20,
          bottom: 30,
        },
      },
      tooltip: {
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        titleFont: {
          size: 16,
          weight: "bold" as const, // Corregido el tipo de 'weight'
        },
        bodyFont: {
          size: 14,
        },
        padding: 10,
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#4B5563",
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
        },
      },
      y: {
        grid: {
          borderDash: [5, 5],
          color: "#D1D5DB",
        },
        ticks: {
          color: "#4B5563",
          font: {
            size: 12,
            family: "Arial, sans-serif",
          },
          padding: 10,
        },
      },
    },
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
      <Line data={data} options={options} />
    </div>
  );
};

export default TournamentLineChart;
