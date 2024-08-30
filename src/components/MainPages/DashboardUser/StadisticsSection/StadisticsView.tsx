"use client";

import React from "react";
import MatchStatsChart from "../../../MainComponents/MatchChart/MatchChart";
import TournamentLineChart from "../../../MainComponents/TournamentChart/TournamentChart";
const wins = 15; // Número de partidos ganados (puedes obtener estos datos desde tu backend)
const losses = 5;
const gano = [5, 8, 3, 6, 7, 9, 4, 2, 8, 10, 6, 9]; // Ejemplo de torneos ganados por mes
const perdio = [3, 4, 2, 5, 6, 3, 7, 4, 6, 5, 2, 4];

const StadisticsView = () => {
  return (
    <div className="flex flex-wrap w-full my-20">
      <div className="w-full md:w-1/2 p-2">
        <MatchStatsChart wins={wins} losses={losses} />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <TournamentLineChart gano={gano} perdio={perdio} />
      </div>
    </div>
  );
};

export default StadisticsView;
