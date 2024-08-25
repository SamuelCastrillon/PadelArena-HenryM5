"use client";
import React from "react";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import TournamentCard from "../TournamentCard/TournamentCard";

interface TournamentGalleryProps {
  tournaments: ITournament[];
}

const TournamentGallery: React.FC<TournamentGalleryProps> = ({
  tournaments,
}) => {
  const [hoveredCard, setHoveredCard] = React.useState<number | null>(null);

  return (
    <div className="relative grid grid-cols-1 md:grid-cols-3 gap-4">
      {tournaments.map((tournament, index) => (
        <div
          key={tournament.id}
          className={`relative ${
            index % 3 === 0 ? "md:row-span-2" : "md:row-span-1"
          }`}
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <TournamentCard
            src={tournament.tournamentFlyer}
            alt={tournament.name}
            title={tournament.name}
            genero={tournament.genero || "No especificado"}
            categoria={tournament.category.name}
            inscripciones={tournament.inscripciones}
            href={`/tournaments/${tournament.id}`}
            className={`relative z-10 ${
              index % 3 === 0 ? "h-[32rem]" : "h-60"
            } hover:scale-105 transition-transform duration-300`}
            isHovered={hoveredCard !== null && hoveredCard !== index}
          />
        </div>
      ))}
    </div>
  );
};

export default TournamentGallery;
