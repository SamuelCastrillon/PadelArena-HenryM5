"use client";
import { useState, useEffect } from "react";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { getCategories } from "@/Server/Category/getCategories";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";

const useTournamentData = () => {
  const [tournaments, setTournaments] = useState<ITournament[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [tournamentsData, categoriesData] = await Promise.all([
          getTournaments(),
          getCategories(),
        ]);
        setTournaments(tournamentsData);
        setCategories(categoriesData);
        setLoading(false);
      } catch (error) {
        setError("Error fetching tournament data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  console.log(tournaments, categories, loading, error);
  return { tournaments, categories, loading, error };
};

export default useTournamentData;

//para llevarme la info
