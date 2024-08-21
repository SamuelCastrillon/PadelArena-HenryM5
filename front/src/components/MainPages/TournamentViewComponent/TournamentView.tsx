"use client";

import Carousel from "@/components/MainComponents/ReusableCarouselComponent/ReusableCarousel";
import SearchBar from "@/components/MainComponents/SearchBar/SearchBar";
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

const TournamentsView: React.FC = () => {
  const mapTournamentsToCarousel = (tournaments: Tournament[]) =>
    tournaments.map((tournament) => ({
      src: tournament.imageUrl,
      alt: `${tournament.name} - ${tournament.description}`,
      title: tournament.name,
      description: tournament.description,
      href: `/tournaments/${tournament.id}`,
    }));

  return (
    <div className="space-y-10">
      <h1>Hi commit</h1>
      <div className="w-[80%] mx-auto">
        <h2 className="text-xl radhiumz mb-4">Torneos por Comenzar</h2>
        <Carousel images={mapTournamentsToCarousel(upcomingTournaments)} />
      </div>

      <div className="w-[80%] mx-auto">
        <h2 className="text-xl radhiumz  mb-4">Torneos en Progreso</h2>
        <Carousel images={mapTournamentsToCarousel(inProgressTournaments)} />
      </div>

      <div className="w-[80%] mx-auto">
        <h2 className="text-xl radhiumz  mb-4">Torneos Finalizados</h2>
        <Carousel images={mapTournamentsToCarousel(finishedTournaments)} />
      </div>
    </div>
  );
};

export default TournamentsView;
