import React from "react";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { getTournaments } from "@/Server/Tournament/getTournaments";

const UpcomingTournamentsPage = async () => {
  const tournaments: ITournament[] = await getTournaments();
  console.log(tournaments);
  const filteredTournaments = tournaments.filter(
    (tournament) => tournament.status === "por comenzar"
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl radhiumz text-white mb-8 uppercase">
        Torneos por comenzar
      </h1>
      <p className="text-white text-2xl sfRegular mb-10">
        Aun estas a tiempo de anotarte!
      </p>
      {filteredTournaments.length > 0 ? (
        <TournamentSectionAll tournaments={filteredTournaments} />
      ) : (
        <p>No hay torneos disponibles por comenzar.</p>
      )}
    </div>
  );
};

export default UpcomingTournamentsPage;
