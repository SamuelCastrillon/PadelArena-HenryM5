"use client";

import Carousel from "@/components/MainComponents/ReusableCarouselComponent/ReusableCarousel";
import SearchBar from "@/components/MainComponents/SearchBar/SearchBar";
import SearchBarDrop from "@/components/MainComponents/SearchBarDropMenu/SearchBarDrop";
import {
  finishedTournaments,
  inProgressTournaments,
  Tournament,
  upcomingTournaments,
} from "@/helpers/tournamentsData";
import React from "react";

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
        <h1 className="radhiumz text-4xl uppercase">
          Torneos de hoy, ayer y siempre{" "}
        </h1>
        <h2 className="sfRegular text-xl">
          Una mirada a nuestros mas recientes torneos
        </h2>
      </div>
      <div className="w-1/2 mx-auto border-2 border-red-600 mt-20 ">
        <SearchBarDrop onSearch={handleSearch} categorias={categoriasHelper} />
      </div>
      <div className="w-[80%] mx-auto mt-32">
        <h2 className="text-xl radhiumz mb-4">Torneos por Comenzar</h2>
        <Carousel images={mapTournamentsToCarousel(upcomingTournaments)} />
      </div>

      <div className="w-[80%] mx-auto mt-32">
        <h2 className="text-xl radhiumz  mb-4">Torneos en Progreso</h2>
        <Carousel images={mapTournamentsToCarousel(inProgressTournaments)} />
      </div>

      <div className="w-[80%] mx-auto mt-32">
        <h2 className="text-xl radhiumz  mb-4">Torneos Finalizados</h2>
        <Carousel images={mapTournamentsToCarousel(finishedTournaments)} />
      </div>
    </div>
  );
};

export default TournamentsView;
