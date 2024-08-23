import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import TournamentDetailView from "@/components/MainPages/TournamentDetailView/TournamentDetailView";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { tournaments } from "@/helpers/tournamentsData";
import React from "react";

//peticion get tournament/id

export const findTournamentById = (id: string): ITournament | undefined => {
  return tournaments.find((tournament: ITournament) => tournament.id === id);
};

const TournamentDetail = async ({ params }: { params: { id: string } }) => {
  const tournament = findTournamentById(params.id);

  if (!tournament) {
    return <div>Torneo no encontrado</div>;
  }

  return (
    <div className=" w-[90%] md:w-3/4 mx-auto p-4 justify-center items-center ">
      <TournamentDetailView {...tournament} />
    </div>
  );
};

export default TournamentDetail;
