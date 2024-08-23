// components/TournamentSection.tsx
import React from "react";
import Carousel from "@/components/MainComponents/ReusableCarouselComponent/ReusableCarousel";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { PlusIcon } from "@heroicons/react/24/solid";

import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

interface TournamentSectionProps {
  title: string;
  tournaments: ITournament[];
  onActionClick: () => void;
}

const TournamentSection: React.FC<TournamentSectionProps> = ({
  title,
  tournaments,
  onActionClick,
}) => {
  const mapTournamentsToCarousel = (tournaments: ITournament[]) =>
    tournaments.map((tournament) => ({
      src: tournament.tournamentFlyer,
      alt: `${tournament.name} - ${tournament.description}`,
      title: tournament.name,
      href: `/tournaments/${tournament.id}`,
      categoria: tournament.category.name,
      genero: tournament.genero ?? "Unknown", // provide a default value for genero
      inscripciones: tournament.inscripciones,
    }));

  return (
    <div className=" w-[80%] mx-auto mt-10 md:mt-32">
      <div className="flex flex-row items-center justify-between w-[90%] md:w-[60%] mb-4">
        <h2 className="text-2xl md:text-4xl radhiumz mb-4">{title}</h2>
        <ActionButton
          className="flex items-center justify-center w-10 h-10 bg-lime text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={onActionClick}
        >
          <PlusIcon className="h-6 w-6" />
        </ActionButton>
      </div>
      <Carousel images={mapTournamentsToCarousel(tournaments)} />
    </div>
  );
};

export default TournamentSection;
