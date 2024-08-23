import TournamentsView from "@/components/MainPages/TournamentViewComponent/TournamentView";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import React from "react";
import { getTournaments } from "@/Server/Tournament/getTournaments";

//peticion get tournaments
const Tournaments = async () => {
  //const tournaments:ITournament[] = await getTournaments();
  //console.log(tournaments);
  return (
    <div>
      <TournamentsView tournaments={tournamentsHelper} />
    </div>
  );
};

export default Tournaments;
