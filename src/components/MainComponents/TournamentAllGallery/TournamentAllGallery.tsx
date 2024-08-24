import React from "react";

import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import TournamentCard from "../TournamentCard/TournamentCard";

interface TournamentGalleryProps {
  tournaments: ITournament[];
}

const TournamentGallery: React.FC<TournamentGalleryProps> = ({
  tournaments,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {tournaments.map((tournament) => (
        <TournamentCard
          key={tournament.id}
          src={tournament.tournamentFlyer} // Supongo que este es el campo de la URL de la imagen
          alt={tournament.name}
          title={tournament.name}
          genero={tournament.genero || "No especificado"}
          categoria={tournament.category.name} // Si `category` es un objeto con `name`
          inscripciones={tournament.inscripciones}
          href={`/tournaments/${tournament.id}`}
        />
      ))}
    </div>
  );
};

export default TournamentGallery;
