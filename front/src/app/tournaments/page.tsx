import TournamentsView from "@/components/MainPages/TournamentViewComponent/TournamentView";
import { tournaments } from "@/helpers/tournamentsData";
import React from "react";
import { getTournaments } from "@/Server/Tournament/getTournaments";

//peticion get tournaments
const Tournaments = async () => {
  const tournaments = await getTournaments();
  console.log(tournaments);
  return (
    <div>
      <TournamentsView tournaments={tournaments} />
    </div>
  );
};

export default Tournaments;
