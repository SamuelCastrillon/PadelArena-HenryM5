import React from "react";
import { tournamentsHelper } from "@/helpers/tournamentsData";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { getTournaments } from "@/Server/Tournament/getTournaments";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";

const UpcomingTournamentsPage = async () => {
  const tournaments: ITournament[] = await getTournaments();
  console.log(tournaments);
  const filteredTournaments = tournaments.filter(
    (tournament) => tournament.status === "por comenzar"
  );

  return (
    <div className="min-h-screen w-[90%] mx-auto mt-14">
      <h1 className="text-4xl radhiumz text-white mb-8 uppercase">
        Torneos por comenzar <hr className="text-white h-2 w-full"></hr>
      </h1>

      {filteredTournaments.length > 0 ? (
        <>
          <div className="flex w-full mx-auto ">
            <div className="flex">
              <p className="text-white text-xl md:text-2xl sfRegular mb-10">
                Aun estas a tiempo de anotarte!
              </p>
            </div>
            <div className="flex ml-20">
              <NavigateButton
                className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-black hover:text-white
            py-2"
                href="/tournaments"
              >
                Vuelve a Torneos
              </NavigateButton>
            </div>
          </div>
          <TournamentSectionAll tournaments={filteredTournaments} />
        </>
      ) : (
        <div className="flex w-full mx-auto">
          <p className="text-white">No hay torneos disponibles por comenzar.</p>
          <NavigateButton
            className="bg-lime text-black sfBold px-4 rounded-lg hover:bg-black hover:text-white
            py-2"
            href="/tournaments"
          >
            Vuelve a Torneos
          </NavigateButton>
        </div>
      )}
    </div>
  );
};

export default UpcomingTournamentsPage;
