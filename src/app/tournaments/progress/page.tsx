import React from "react";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

const ProgressTournamentsPage = async () => {
  const tournaments: ITournament[] = await getTournaments();
  console.log(tournaments);
  const filteredTournaments = tournaments.filter(
    (tournament) => tournament.status === "en progreso"
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
