import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import {
  finishedTournaments,
  inProgressTournaments,
  Tournament,
  upcomingTournaments,
} from "@/helpers/tournamentsData";
import React from "react";

export const findTournamentById = (id: string): Tournament | undefined => {
  return (
    upcomingTournaments.find((tournament) => tournament.id === id) ||
    inProgressTournaments.find((tournament) => tournament.id === id) ||
    finishedTournaments.find((tournament) => tournament.id === id)
  );
};

const TournamentDetail = async ({ params }: { params: { id: string } }) => {
  const tournament = findTournamentById(params.id);

  if (!tournament) {
    return <div>Torneo no encontrado</div>;
  }

  return (
    <div className="w-1/2 mx-auto p-4 justify-center items-center border-2 border-red-600">
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
        }}
      />
    </div>
  );
};

export default TournamentDetail;
