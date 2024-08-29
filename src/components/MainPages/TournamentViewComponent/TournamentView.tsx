"use client";
import React, { useState } from "react";
import TournamentSection from "./TournamentSection";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";
import Header from "./TournamentHeader";
import { useRouter } from "next/navigation";
import useTournamentData from "@/hooks/fetchTournamentData";

const TournamentsView: React.FC = ({}) => {
  const { tournaments, categories } = useTournamentData();
  console.log(tournaments, categories);
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

  const filterTournaments = (status: string) => {
    if (!tournaments || tournaments.length === 0) {
      return [];
    }

    // Normaliza el estado para la comparación
    const normalizedStatus = status.trim().toLowerCase();

    return tournaments.filter((tournament) => {
      // Asegúrate de que todas las propiedades estén presentes
      const tournamentStatus = tournament?.status?.trim().toLowerCase();
      const tournamentCategoryName = tournament?.category?.name
        ?.trim()
        .toLowerCase();
      const selectedCategory = filteredCategory.trim().toLowerCase();

      return (
        tournamentStatus === normalizedStatus &&
        (!filteredCategory || tournamentCategoryName === selectedCategory)
      );
    });
  };

  console.log("Datos de torneos antes del filtrado:", tournaments);

  return (
    <div className="min-h-screen">
      <Header />

      <div className="w-[90%] md:w-1/2 px-4 py-6 mx-auto mt-20 bg-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
        <SearchBarDrop
          onSearch={handleSearch}
          onClear={handleClearSearch}
          categorias={
            categories?.length ? categories.map((cat) => cat.name) : []
          }
        />
      </div>

      <section className="bg-white py-2 md:py-6 my-14 min-h-screen w-[90%] mx-auto rounded-3xl">
        {filteredCategory && (
          <h2 className="text-4xl radhiumz mt-4 ml-10">
            Resultados de la búsqueda:{" "}
            <span className="text-blue-700 underline">{filteredCategory}</span>
          </h2>
        )}

        {categories?.length === 0 && (
          <div className="text-center text-gray-500 mt-10">
            <p>No hay categorías disponibles en este momento!</p>
          </div>
        )}

        {tournaments?.length === 0 ? (
          <div className="text-center text-gray-500 mt-10">
            <p>No hay torneos disponibles en este momento.</p>
          </div>
        ) : (
          <>
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
          </>
        )}
      </section>
    </div>
  );
};

export default TournamentsView;
