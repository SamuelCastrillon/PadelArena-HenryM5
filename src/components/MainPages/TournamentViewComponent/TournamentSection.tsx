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
  console.log(tournaments);

  // Función para obtener la URL de la imagen, con respaldo en caso de URL inválida
  const getImageUrl = (src: string) => {
    // Puedes definir aquí tu URL predeterminada local
    const defaultImage = "/images/default-image.jpg";

    // Comprobar si la URL es válida
    const isValidUrl = src.startsWith("http://") || src.startsWith("https://");

    return isValidUrl ? src : defaultImage;
  };

  const mapTournamentsToCarousel = (tournaments: ITournament[]) =>
    tournaments.map((tournament) => ({
      src: getImageUrl(tournament.tournamentFlyer), // Usar la función para obtener la URL de la imagen
      alt: `${tournament.name} - ${tournament.description}`,
      title: tournament.name,
      href: `/tournaments/${tournament.id}`,
      categoria: tournament.category?.name || "Sin categoría",
      genero: tournament.genero ?? "Unknown",
      inscripciones: tournament.inscripciones,
    }));

  return (
    <div className="w-[80%] mx-auto mt-10 md:mt-32">
      <div className="flex flex-row items-center justify-between w-[90%] md:w-[60%] mb-4">
        <h2 className="text-2xl md:text-4xl radhiumz mb-4">{title}</h2>
        <ActionButton
          className="flex items-center justify-center w-10 h-10 bg-lime text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={onActionClick}
        >
          <PlusIcon className="h-6 w-6" />
        </ActionButton>
      </div>
      {tournaments.length === 0 ? (
        <p className="sfBold text-2xl">{`No hay torneos disponibles :(`} </p>
      ) : (
        <Carousel images={mapTournamentsToCarousel(tournaments)} />
      )}
    </div>
  );
};

export default TournamentSection;
