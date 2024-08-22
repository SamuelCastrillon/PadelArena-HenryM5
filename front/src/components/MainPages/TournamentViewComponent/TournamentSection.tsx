// components/TournamentSection.tsx
import React from "react";
import Carousel from "@/components/MainComponents/ReusableCarouselComponent/ReusableCarousel";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { PlusIcon } from "@heroicons/react/24/solid";
import { Tournament } from "@/helpers/tournamentsData";

interface TournamentSectionProps {
  title: string;
  tournaments: Tournament[];
  onActionClick: () => void;
}

const TournamentSection: React.FC<TournamentSectionProps> = ({
  title,
  tournaments,
  onActionClick,
}) => {
  const mapTournamentsToCarousel = (tournaments: Tournament[]) =>
    tournaments.map((tournament) => ({
      src: tournament.imageUrl,
      alt: `${tournament.name} - ${tournament.description}`,
      title: tournament.name,
      description: tournament.description,
      categoria: tournament.categoria,
      genero: tournament.genero,
      href: `/tournaments/${tournament.id}`,
      inscripciones: tournament.inscripciones,
    }));

  return (
    <div className="w-[80%] mx-auto mt-32">
      <div className="flex items-center justify-between w-[60%] mb-4">
        <h2 className="text-4xl radhiumz mb-4">{title}</h2>
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
