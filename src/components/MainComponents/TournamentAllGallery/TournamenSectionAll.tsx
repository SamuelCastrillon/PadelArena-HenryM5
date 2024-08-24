import React from "react";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import TournamentGallery from "./TournamentAllGallery";

interface TournamentSectionAllProps {
  tournaments: ITournament[];
}

const TournamentSectionAll: React.FC<TournamentSectionAllProps> = ({
  tournaments,
}) => {
  return (
    <section>
      {tournaments.length > 0 ? (
        <TournamentGallery tournaments={tournaments} />
      ) : (
        <p>No tournaments available.</p>
      )}
    </section>
  );
};

export default TournamentSectionAll;
