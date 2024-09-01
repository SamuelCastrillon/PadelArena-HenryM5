"use client";

import TournamentSectionAll from "@/components/MainComponents/TournamentAllGallery/TournamenSectionAll";
import { AuthContext } from "@/context/GlobalContext";
import useTournamentData from "@/hooks/fetchTournamentData";
import React, { useContext } from "react";

const PersonalizedTournamentView = () => {
  // Obtiene los torneos del hook
  const { tournaments } = useTournamentData();

  // Obtiene el contexto del usuario
  const { currentUser } = useContext(AuthContext);

  // Obtiene la categoría del usuario
  const userCategory = currentUser?.category?.name;

  // Filtra los torneos basados en la categoría del usuario y el estado de inscripción
  const filteredTournaments = tournaments.filter(
    (tournament) =>
      tournament.category?.name === userCategory && // Coincide con la categoría del usuario
      tournament.inscription === "abiertas" // Inscripciones abiertas
  );

  return (
    <div className="flex flex-col justify-center items-center   p-10">
      {filteredTournaments && filteredTournaments.length > 0 ? (
        <>
          <h1 className="text-4xl radhiumz text-lime uppercase">
            ¡Aún puedes inscribirte a estos torneos!
          </h1>
          <p className="text-white sfRegular text-xl">
            Especialmente seleccionados de acuerdo a tu categoría
          </p>

          <TournamentSectionAll tournaments={filteredTournaments} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center w-[90%] mx-auto">
          <h1 className="text-3xl radhiumz text-lime uppercase">
            Estate atento a los proximos torneos de tu categoria!
          </h1>
        </div>
      )}
    </div>
  );
};

export default PersonalizedTournamentView;
