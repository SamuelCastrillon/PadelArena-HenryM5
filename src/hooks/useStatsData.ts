import { useState, useEffect } from "react";

import { getUserStats } from "@/Server/User/userStats";
import { getTournamentWinner } from "@/Server/Tournament/tournamentWinner";

const useUserStats = (userId: string, token: string) => {
  const [stats, setStats] = useState<{
    won: number;
    loss: number;
    gano?: number[];
    perdio?: number[];
  } | null>(null);
  const [winner, setWinner] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      console.log(userId, token), "datos en usestats";
      try {
        const response = await getUserStats(userId, token);
        console.log(response, "stats");
        setStats(response);
      } catch (err) {
        setError("Error al cargar las estadísticas");
      } finally {
        setLoading(false);
      }
    };
    const fetchTournamentWinner = async () => {
      try {
        const response = await getTournamentWinner(userId);
        console.log(response, "winner");
      } catch (err) {
        setError("Error al cargar las estadísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
    fetchTournamentWinner();
  }, [token]);

  return { stats, loading, error };
};

export default useUserStats;
