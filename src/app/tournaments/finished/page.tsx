import React from "react";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";

const FinishedTournamentsPage = () => {
  const filteredTournaments = tournamentsHelper.filter(
    (tournament) => tournament.status === "finalizado"
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl radhiumz text-white mb-8">torneos finalizados</h1>
      {filteredTournaments.length > 0 ? (
        <TournamentSectionAll tournaments={filteredTournaments} />
      ) : (
        <p>No hay torneos disponibles.</p>
      )}
    </div>
  );
};

export default FinishedTournamentsPage;
