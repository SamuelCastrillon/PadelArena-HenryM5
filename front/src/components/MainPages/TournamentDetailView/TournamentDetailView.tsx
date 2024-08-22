// components/TournamentDetailView.tsx
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
      <div className={`p-4 mb-4 w-full text-xl text-center ${statusColor}`}>
        {statusText}
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
      </div>
    </div>
  );
};

export default TournamentDetailView;
