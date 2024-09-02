"use client";

import { useState, useEffect } from "react";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { getCategories } from "@/Server/Category/getCategories";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";

const useTournamentData = () => {
  const [tournaments, setTournaments] = useState<ITournament[]>([]);
  const [categories, setCategories] = useState<ICategories[]>([]);

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
      } catch (error) {
        setError(
          "Error al obtener los datos. Por favor, intenta de nuevo más tarde."
        );
      }
    };

    fetchData();
  }, []);
  console.log(tournaments, categories);
  return { tournaments, categories, error };
};

export default useTournamentData;
