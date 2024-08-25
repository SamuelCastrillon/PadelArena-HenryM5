import React from "react";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";

const ProgressTournamentsPage = () => {
  const filteredTournaments = tournamentsHelper.filter(
    (tournament) => tournament.status === "progress"
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl radhiumz text-white mb-8">torneos en progreso</h1>
      {filteredTournaments.length > 0 ? (
        <TournamentSectionAll tournaments={filteredTournaments} />
      ) : (
        <p>No hay torneos disponibles en progreso.</p>
      )}
    </div>
  );
};

export default ProgressTournamentsPage;
