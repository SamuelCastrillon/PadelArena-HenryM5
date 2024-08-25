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
    <section className="bg-glass shadow-glass border border-glass rounded-glass backdrop-blur-glass p-4">
      {tournaments.length > 0 ? (
        <TournamentGallery tournaments={tournaments} />
      ) : (
        <p>No tournaments available.</p>
      )}
    </section>
  );
};

export default TournamentSectionAll;
