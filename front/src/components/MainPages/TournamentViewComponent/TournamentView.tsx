// pages/TournamentsView.tsx
"use client";

import React from "react";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";

import {
  finishedTournaments,
  inProgressTournaments,
  Tournament,
  upcomingTournaments,
} from "@/helpers/tournamentsData";
import Header from "./TournamentHeader";
import TournamentSection from "./TournamentSection";

const categoriasHelper = [
  "primera",
  "segunda",
  "tercera",
  "cuarta",
  "quinta",
  "sexta",
  "septima",
  "octava",
];

const TournamentsView: React.FC = () => {
  const [filteredCategory, setFilteredCategory] = React.useState<string>("");

  const handleSearch = (selectedCategory: string) => {
    setFilteredCategory(selectedCategory);
  };

  const handleClearSearch = () => {
    setFilteredCategory("");
  };

  const filterByCategory = (tournaments: Tournament[]) =>
    tournaments.filter(
      (tournament) => tournament.categoria === filteredCategory
    );

  return (
    <div className="min-h-screen">
      <Header />
      <div className="w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-blur-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
        <SearchBarDrop
          onSearch={handleSearch}
          onClear={handleClearSearch}
          categorias={categoriasHelper}
        />
      </div>
      <section className="bg-white py-6 mt-4 mb-14 min-h-screen w-[90%] mx-auto rounded-3xl">
        {filteredCategory ? (
          <div>
            <h2 className="text-4xl radhiumz">
              Resultados de la búsqueda: {filteredCategory}
            </h2>
            <TournamentSection
              title="Torneos por Comenzar"
              tournaments={filterByCategory(upcomingTournaments)}
              onActionClick={() => console.log("click")}
            />
            <TournamentSection
              title="Torneos en Progreso"
              tournaments={filterByCategory(inProgressTournaments)}
              onActionClick={() => console.log("click")}
            />
            <TournamentSection
              title="Torneos Finalizados"
              tournaments={filterByCategory(finishedTournaments)}
              onActionClick={() => console.log("click")}
            />
          </div>
        ) : (
          <>
            <TournamentSection
              title="Torneos por Comenzar"
              tournaments={upcomingTournaments}
              onActionClick={() => console.log("click")}
            />
            <TournamentSection
              title="Torneos en Progreso"
              tournaments={inProgressTournaments}
              onActionClick={() => console.log("click")}
            />
            <TournamentSection
              title="Torneos Finalizados"
              tournaments={finishedTournaments}
              onActionClick={() => console.log("click")}
            />
          </>
        )}
      </section>
    </div>
  );
};

export default TournamentsView;
