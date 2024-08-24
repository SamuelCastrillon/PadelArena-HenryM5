"use client";

import React from "react";
import { useEffect } from "react";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";
import Header from "./TournamentHeader";
import TournamentSection from "./TournamentSection";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { categoriasHelper } from "@/helpers/categories";
import { getCategories } from "@/Server/Category/getCategories";

const TournamentsView: React.FC<{ tournaments: ITournament[] }> = ({ tournaments }) => {
  const [filteredCategory, setFilteredCategory] = React.useState<string>("");

  const [categoriesNames, setCategories] = React.useState<string[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await getCategories();
      if (!response) {
        throw new Error("Network response failed");
      }

      const categoryNames = response.map((category: any) => category.name);
      setCategories(categoryNames);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleSearch = (selectedCategory: string) => {
    setFilteredCategory(selectedCategory);
  };

  const handleClearSearch = () => {
    setFilteredCategory("");
  };

  const handlePlusClick = (status: string) => {
    location.href = `/tournaments/${status}`;
  };

  const filterTournaments = (status: string) => {
    if (!tournaments || !Array.isArray(tournaments)) return [];

    return tournaments.filter(
      (tournament) =>
        tournament.status === status &&
        (!filteredCategory || tournament.category.name === filteredCategory)
    );
  };

  //const categoriesNames = categoriasHelper.map((category) => category.name);
  //console.log(categoriesNames);

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-blur-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
        <SearchBarDrop
          onSearch={handleSearch}
          onClear={handleClearSearch}
          categorias={categoriesNames}
        />
      </div>
      <section className="bg-white py-2 md:py-6 mt-4 mb-14 min-h-screen w-[90%] mx-auto rounded-3xl">
        {filteredCategory && (
          <h2 className="text-4xl radhiumz">Resultados de la búsqueda: {filteredCategory}</h2>
        )}
        <TournamentSection
          title="Torneos por Comenzar"
          tournaments={filterTournaments("upcoming")}
          onActionClick={() => handlePlusClick("upcoming")}
        />
        <TournamentSection
          title="Torneos en Progreso"
          tournaments={filterTournaments("inProgress")}
          onActionClick={() => handlePlusClick("progress")}
        />
        <TournamentSection
          title="Torneos Finalizados"
          tournaments={filterTournaments("finished")}
          onActionClick={() => handlePlusClick("finished")}
        />
      </section>
    </div>
  );
};

export default TournamentsView;
