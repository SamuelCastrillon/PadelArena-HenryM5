import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import TournamentDetailView from "@/components/MainPages/TournamentDetailView/TournamentDetailView";
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
    <div className="w-3/4 mx-auto p-4 justify-center items-center ">
      <TournamentDetailView {...tournament} />
    </div>
  );
};

export default TournamentDetail;
