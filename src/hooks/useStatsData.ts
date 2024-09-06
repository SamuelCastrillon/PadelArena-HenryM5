import { useState, useEffect } from "react";

import { getUserStats } from "@/Server/User/userStats";

const useUserStats = (userId: string) => {
  const [stats, setStats] = useState<{
    won: number;
    loss: number;
    gano?: number[];
    perdio?: number[];
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await getUserStats(userId);
        setStats(response);
        console.log(response);
      } catch (err) {
        setError("Error al cargar las estadísticas");
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [userId]);

  return { stats, loading, error };
};

export default useUserStats;
