// components/TournamentDetailView.tsx
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import { ITournament } from "@/interfaces/Tournament";
import React from "react";

const TournamentDetailView: React.FC<ITournament> = (tournament) => {
  const statusColor =
    tournament.inscripciones === "abierta"
      ? "text-lime radhiumz text-6xl"
      : "text-red-500 radhiumz text-6xl";
  const statusText =
    tournament.inscripciones === "abierta"
      ? "Inscripción Abierta"
      : "Inscripción Cerrada";

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Estado del Torneo */}
      <div className={`p-4 mb-4 w-full text-2xl text-center ${statusColor}`}>
        {statusText}
      </div>
      <div className="mb-10 flex items-center">
        <NavigateButton href="/tournaments" className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <h1 className="radhiumz text-white text-2xl">vuelve a torneos</h1>
        </NavigateButton>
      </div>
      <div className="w-1/2 mx-auto">
        {/* Información del Torneo */}
        <Card
          imageUrl={tournament.imageUrl}
          title={tournament.name}
          description={tournament.description}
          className="rounded-2xl"
          additionalInfo={{
            "Fecha de inicio": tournament.startDate,
            "Fecha de fin": tournament.endDate,
            "Hora de inicio": tournament.startingTime,
            "Hora de finalización": tournament.finishingTime,
            "Canchas disponibles": tournament.courtsAvailable,
            Categoría: tournament.categoria,
            Género: tournament.genero,
            Inscripciones: tournament.inscripciones,
          }}
        />
        <div className="w-full mt-8 mb-8 mx-auto justify-center flex">
          <NavigateButton
            href="/tournaments/register"
            className="w-full py-4 px-10  h-12  bg-lime text-black radhiumz"
          >
            Inscribite
          </NavigateButton>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetailView;
