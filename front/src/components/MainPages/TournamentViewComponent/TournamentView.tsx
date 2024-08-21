"use client";

import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import Carousel from "@/components/MainComponents/ReusableCarouselComponent/ReusableCarousel";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";
import {
  finishedTournaments,
  inProgressTournaments,
  Tournament,
  upcomingTournaments,
} from "@/helpers/tournamentsData";
import React from "react";
import { PlusIcon } from "@heroicons/react/24/solid";

const handleSearch = () => {
  console.log("Search here and here and here");
};

const categoriasHelper = [
  "primera",
  "segunda",
  "tercera",
  "cuarta",
  "quinta",
  "sexta",
  "septima",
  "octava",
];

const TournamentsView: React.FC = () => {
  const mapTournamentsToCarousel = (tournaments: Tournament[]) =>
    tournaments.map((tournament) => ({
      src: tournament.imageUrl,
      alt: `${tournament.name} - ${tournament.description}`,
      title: tournament.name,
      description: tournament.description,
      categoria: tournament.categoria,
      genero: tournament.genero,
      href: `/tournaments/${tournament.id}`,
    }));

  return (
    <div className="min-h-screen">
      <div className="mt-20 justify-start items-center flex-col flex">
        <h1 className="radhiumz text-4xl uppercase text-white">
          Torneos de hoy, ayer y siempre{" "}
        </h1>
        <h2 className="sfRegular text-xl text-white">
          Una mirada a nuestros más recientes torneos
        </h2>
      </div>

      <div className="w-1/2 p-4 mx-auto mt-20 bg-glass backdrop-blur-glass backdrop-filter-glass border-glass border-2 rounded-glass shadow-glass">
        <SearchBarDrop onSearch={handleSearch} categorias={categoriasHelper} />
      </div>
      <section className="bg-white py-6 mt-4">
        <div className="w-[80%] mx-auto mt-32">
          <div className="flex items-center justify-between w-[50%] mb-4">
            <h2 className="text-4xl radhiumz">Torneos por Comenzar</h2>
            <ActionButton
              className="flex items-center justify-center w-10 h-10 bg-lime text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => {
                console.log("click");
              }}
            >
              <PlusIcon className="h-6 w-6" />
            </ActionButton>
          </div>
          <Carousel images={mapTournamentsToCarousel(upcomingTournaments)} />
        </div>

        <div className="w-[80%] mx-auto mt-32">
          <div className="flex items-center justify-between w-[50%] mb-4">
            <h2 className="text-4xl radhiumz mb-4 ">Torneos en Progreso</h2>
            <ActionButton
              className="flex items-center justify-center w-10 h-10 bg-lime text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => {
                console.log("click");
              }}
            >
              <PlusIcon className="h-6 w-6" />
            </ActionButton>
          </div>
          <Carousel images={mapTournamentsToCarousel(inProgressTournaments)} />
        </div>

        <div className="w-[80%] mx-auto mt-32">
          <div className="flex items-center justify-between w-[50%] mb-4">
            <h2 className="text-4xl radhiumz mb-4 ">Torneos Finalizados</h2>
            <ActionButton
              className="flex items-center justify-center w-10 h-10 bg-lime text-black rounded-full shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => {
                console.log("click");
              }}
            >
              <PlusIcon className="h-6 w-6" />
            </ActionButton>
          </div>
          <Carousel images={mapTournamentsToCarousel(finishedTournaments)} />
        </div>
      </section>
    </div>
  );
};

export default TournamentsView;
