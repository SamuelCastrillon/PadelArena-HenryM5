"use client";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import { ITournament } from "@/interfaces/Tournament";
import React, { useState } from "react";

const TournamentDetailView: React.FC<ITournament> = (tournament) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blurBackground, setBlurBackground] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const statusColor =
    tournament.inscripciones === "abierta"
      ? "text-lime radhiumz text-6xl"
      : "text-red-500 radhiumz text-6xl";
  const statusText =
    tournament.inscripciones === "abierta"
      ? "Inscripción Abierta"
      : "Inscripción Cerrada";

  return (
    <div className="flex flex-col items-center mt-20">
      {/* Estado del Torneo */}
      <div className={`p-4 mb-4 w-full text-2xl text-center ${statusColor}`}>
        {statusText}
      </div>
      <div className="mb-10 flex items-center">
        <NavigateButton href="/tournaments" className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <h1 className="radhiumz text-white text-2xl">vuelve a torneos</h1>
        </NavigateButton>
      </div>
      <div className="w-1/2 mx-auto">
        {/* Información del Torneo */}
        <Card
          imageUrl={tournament.imageUrl}
          title={tournament.name}
          description={tournament.description}
          className="rounded-2xl"
          additionalInfo={{
            "Fecha de inicio": tournament.startDate,
            "Fecha de fin": tournament.endDate,
            "Hora de inicio": tournament.startingTime,
            "Hora de finalización": tournament.finishingTime,
            "Canchas disponibles": tournament.courtsAvailable,
            Categoría: tournament.categoria,
            Género: tournament.genero,
            Inscripciones: tournament.inscripciones,
          }}
        />
        <div className="w-full mt-8 mb-8 mx-auto justify-center flex">
          {tournament.inscripciones === "abierta" && (
            <NavigateButton
              href="/tournaments/register"
              className="w-full py-4 px-10 rounded-xl  h-12  bg-lime text-black radhiumz"
            >
              Inscribite
            </NavigateButton>
          )}
        </div>
        <div className="w-full mt-4 mx-auto justify-center flex">
          <button
            onClick={openModal}
            className="w-full py-4 px-10 h-12 bg-blue-500 text-white radhiumz"
          >
            Fixture
          </button>
        </div>
      </div>
      {/* Modal del Fixture */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blurBackground={blurBackground}
        backgroundColor="bg-lime"
        textColor="text-black"
      >
        <h2 className="text-3xl mb-4 radhiumz">{`Fixture del Torneo: ${tournament.name}`}</h2>
        <table className="w-full min-w-max table-auto text-left bg-white">
          <thead className="border-b border-zinc-700 bg-blue-gray-50 p-4 radhiumz text-black bg-gray-400">
            <tr>
              <th className="py-2 px-4 border-b">Etapa</th>
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Hora</th>
            </tr>
          </thead>
          <tbody>
            {tournament.fixture.map((match) => (
              <tr key={match.id}>
                <td className="py-2 px-4 border-b">{match.stage}</td>
                <td className="py-2 px-4 border-b">{match.date}</td>
                <td className="py-2 px-4 border-b">{match.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ReusableModal>
    </div>
  );
};

export default TournamentDetailView;
