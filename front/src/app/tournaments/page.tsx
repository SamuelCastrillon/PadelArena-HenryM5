import TournamentsView from "@/components/MainPages/TournamentViewComponent/TournamentView";
import { tournaments } from "@/helpers/tournamentsData";
import React from "react";

//peticion get tournaments
const Tournaments = () => {
  return (
    <div>
      <TournamentsView tournaments={tournaments} />
    </div>
  );
};

export default Tournaments;
