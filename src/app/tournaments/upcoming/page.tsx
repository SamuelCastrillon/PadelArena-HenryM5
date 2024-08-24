import React from "react";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";

const UpcomingTournamentsPage = () => {
  const filteredTournaments = tournamentsHelper.filter(
    (tournament) => tournament.status === "upcoming"
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl font-bold mb-8">Upcoming Tournaments</h1>
      {filteredTournaments.length > 0 ? (
        <TournamentSectionAll tournaments={filteredTournaments} />
      ) : (
        <p>No hay torneos disponibles para Upcoming.</p>
      )}
    </div>
  );
};

export default UpcomingTournamentsPage;
