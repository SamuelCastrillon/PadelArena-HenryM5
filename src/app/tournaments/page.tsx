import TournamentsView from "@/components/MainPages/TournamentViewComponent/TournamentView";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import React from "react";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import useTournamentData from "@/hooks/fetchTournamentData";

//peticion get tournaments
const Tournaments = async () => {
  return (
    <div>
      <TournamentsView />
    </div>
  );
};

export default Tournaments;
