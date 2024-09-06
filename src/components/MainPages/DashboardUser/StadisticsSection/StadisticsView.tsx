"use client";

import React, { useEffect, useState } from "react";
import MatchStatsChart from "../../../MainComponents/MatchChart/MatchChart";
import TournamentLineChart from "../../../MainComponents/TournamentChart/TournamentChart";
import useUserStats from "@/hooks/useStatsData";
import { getUserById } from "@/Server/User/getUserById";

interface StadisticsViewProps {
  userId: string;
}

const StadisticsView = ({ userId }: StadisticsViewProps) => {
  const { stats, loading, error } = useUserStats(userId);
  const [userName, setUserName] = useState<string>("");
  console.log(stats);

  useEffect(() => {
    const getUserName = async () => {
      const response = await getUserById(userId);
      console.log(response);
      if (response) {
        setUserName(response.name);
      }
    };

    getUserName();
  });

  const { won, loss } = stats || {};

  if (loading)
    return <p className="text-white text-center">Cargando estadísticas...</p>;
  if (error) return <p className="text-white text-center">{error}</p>;
  if (!stats)
    return (
      <p className="text-white text-center">No se encontraron estadísticas.</p>
    );

  return (
    <div className="flex flex-col justify-center w-full my-6 px-4">
      <h1 className="text-3xl text-center text-white radhiumz uppercase mb-8">
        {` Una mirada a tu rendimiento ${userName}`}
      </h1>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex-1 mb-8 md:mb-0">
          <MatchStatsChart won={stats?.won} loss={stats?.loss} />
        </div>
        <div className="flex-1">
          <TournamentLineChart
            gano={stats?.gano || []}
            perdio={stats?.perdio || []}
          />
        </div>
      </div>
    </div>
  );
};

export default StadisticsView;
