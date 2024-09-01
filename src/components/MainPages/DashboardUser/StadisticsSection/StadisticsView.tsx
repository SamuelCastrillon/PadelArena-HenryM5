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
    <div className="flex flex-col justify-center w-full my-6">
      <h1 className="text-3xl text-center text-white radhiumz uppercase mb-8">
        Una mirada a tu rendimiento
      </h1>
      <div className="flex flex-row gap-8 w-full px-4 ">
        <div className="flex-1">
          <MatchStatsChart wins={wins} losses={losses} />
        </div>
        <div className="flex-1">
          <TournamentLineChart gano={gano} perdio={perdio} />
        </div>
      </div>
    </div>
  );
};

export default StadisticsView;
