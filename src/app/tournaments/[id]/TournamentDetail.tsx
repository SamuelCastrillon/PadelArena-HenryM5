import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import TournamentDetailView from "@/components/MainPages/TournamentDetailView/TournamentDetailView";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import React from "react";
import { getTournamentById } from "@/Server/Tournament/getTournamentById";

//peticion get tournament/id

// export const findTournamentById = (id: string): ITournament | undefined => {
//   return tournamentsHelper.find(
//     (tournament: ITournament) => tournament.id === id
//   );
// };

//!con retraso para mostrar el loading

const TournamentDetail = async ({ params }: { params: { id: string } }) => {
  console.log(params.id);
  const tournamentId: ITournament | null = await getTournamentById(params.id);
  //const tournament = findTournamentById(params.id);

  if (!tournamentId) {
    return <div>Torneo no encontrado</div>;
  }
  console.log(tournamentId);
  return (
    <div className=" w-[90%] md:w-3/4 mx-auto p-4 justify-center items-center ">
      <TournamentDetailView tournament={tournamentId} />
    </div>
  );
};

export default TournamentDetail;
