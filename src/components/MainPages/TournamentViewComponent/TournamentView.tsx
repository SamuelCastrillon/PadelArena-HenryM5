"use client";
import React, { useEffect, useState } from "react";
import TournamentSection from "./TournamentSection";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";
import Header from "./TournamentHeader";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { getCategories } from "@/Server/Category/getCategories";
import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";
import { useRouter } from "next/navigation";
import useTournamentData from "@/hooks/fetchTournamentData";

const TournamentsView: React.FC = ({}) => {
  const { tournaments, categories } = useTournamentData();
  const router = useRouter();
  const [filteredCategory, setFilteredCategory] = useState<string>("");

  const handleSearch = (selectedCategory: string) => {
    setFilteredCategory(selectedCategory);
  };

  const handleClearSearch = () => {
    setFilteredCategory("");
  };

  const handlePlusClick = (status: string) => {
    router.push(`/tournaments/${status}`);
  };
  console.log(tournaments);
  const filterTournaments = (status: string) => {
    const normalizedStatus = status.trim();

    return tournaments.filter((tournament) => {
      const normalizedTournamentStatus = tournament.status.trim();

      return (
        normalizedTournamentStatus === normalizedStatus &&
        (!filteredCategory || tournament.category.name === filteredCategory)
      );
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
        <SearchBarDrop
          onSearch={handleSearch}
          onClear={handleClearSearch}
          categorias={categories.map((cat) => cat.name)}
        />
      </div>
      <section className="bg-white py-2 md:py-6 my-14 min-h-screen w-[90%] mx-auto rounded-3xl">
        {filteredCategory && (
          <h2 className="text-4xl radhiumz">
            Resultados de la búsqueda: {filteredCategory}
          </h2>
        )}
        <TournamentSection
          title="Torneos por Comenzar"
          tournaments={filterTournaments("por comenzar")}
          onActionClick={() => handlePlusClick("upcoming")}
        />
        <TournamentSection
          title="Torneos en Progreso"
          tournaments={filterTournaments("en progreso")}
          onActionClick={() => handlePlusClick("progress")}
        />
        <TournamentSection
          title="Torneos Finalizados"
          tournaments={filterTournaments("finalizado")}
          onActionClick={() => handlePlusClick("finished")}
        />
      </section>
    </div>
  );
};

export default TournamentsView;
