"use client";
import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { AuthContext } from "@/context/GlobalContext";
import useTournamentData from "@/hooks/fetchTournamentData";
import React, { useContext } from "react";

const PersonalizedTournamentView = () => {
  const { tournaments } = useTournamentData();
  const { currentUser } = useContext(AuthContext);

  const userCategory = currentUser?.category;
  const filteredTournaments = tournaments.filter(
    (tournament) => tournament.category.name === userCategory?.name
  );
  return (
    <div className="flex flex-col justify-center items-center my-10 bg-blue-700/30 p-10">
      <h1 className="text-4xl radhiumz text-lime uppercase">
        Aun puedes inscribirte a estos torneos!
      </h1>
      <p className="text-white sfRegular text-xl">
        Especialmente seleccionados de acuerdo a tu categoria
      </p>

      <TournamentSectionAll tournaments={filteredTournaments} />
    </div>
  );
};

export default PersonalizedTournamentView;
