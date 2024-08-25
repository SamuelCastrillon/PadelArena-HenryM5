"use client";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import React, { useState } from "react";

interface TournamentDetailViewProps {
  tournament: ITournament; // Actualiza aquí
}

const TournamentDetailView: React.FC<TournamentDetailViewProps> = ({
  tournament,
}) => {
  // Cambia aquí
  console.log(tournament);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blurBackground, setBlurBackground] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  console.log(tournament.tournamentFlyer);

  const statusColor =
    tournament.inscripciones === "abierta"
      ? "text-lime radhiumz text-5xl md:text-6xl"
      : "text-red-500 radhiumz text-5xl md:text-6xl";
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
          <h1 className="radhiumz text-white  text-2xl lg:text-4xl">
            vuelve a torneos
          </h1>
        </NavigateButton>
      </div>
      <div className=" w-full md:w-3/4 mx-auto mb-20">
        {/* Información del Torneo */}
        <Card
          imageUrl={getImageUrl(tournament.tournamentFlyer ?? "")}
          title={tournament.name}
          description={tournament.description}
          className="rounded-2xl shadow-lime shadow-lg"
          additionalInfo={{
            "Fecha de inicio": tournament.startDate,
            "Fecha de fin": tournament.endDate,
            "Hora de inicio": tournament.startingTime,
            "Hora de finalización": tournament.finishingTime,
            "Canchas disponibles": tournament.courtsAvailable.toString(),
            Categoría: tournament.category.name,
            Género: tournament.genero ?? "Esta por verse",
            Inscripciones:
              tournament.inscripciones ?? "Aun en proceso de definir",
          }}
        />
        <div className="w-full mt-8 mb-8 mx-auto justify-center flex">
          {tournament.inscripciones === "abierta" && (
            <NavigateButton
              href="/tournaments/register"
              className="w-full py-4 px-10 rounded-xl h-12 bg-lime text-black radhiumz"
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
      {/* Animación de bolas verdes cuando el modal está abierto */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 bg-lime rounded-full animate-bounce-ball"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}
            ></div>
          ))}
        </div>
      )}
      {/* Modal del Fixture */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blurBackground={blurBackground}
        backgroundColor="bg-white/70"
        textColor="text-black"
        className="shadow-lg shadow-lime"
        bgImageUrl={tournament.tournamentFlyer} // Imagen de fondo con efecto animado
      >
        <h2 className="text-4xl  radhiumz text-lime">{`Fixture: ${tournament.name}`}</h2>
        <hr className="h-1 mb-4 bg-lime"></hr>
        <table className="w-full min-w-max table-auto text-left bg-white ">
          <thead className=" bg-blue-gray-50 p-4 radhiumz text-white bg-zinc-800">
            <tr>
              <th className="py-2 px-4 border-b">Etapa</th>
              <th className="py-2 px-4 border-b">Fecha</th>
              <th className="py-2 px-4 border-b">Hora</th>
            </tr>
          </thead>
          <tbody>
            {tournament.fixture && tournament.fixture.length > 0 ? (
              tournament.fixture.map((match) => (
                <tr key={match.id}>
                  <td className="py-2 px-4 border-b">{match.stage}</td>
                  <td className="py-2 px-4 border-b">{match.date}</td>
                  <td className="py-2 px-4 border-b">{match.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="py-2 px-4 border-b" colSpan={3}>
                  No hay fixture para este torneo
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </ReusableModal>
    </div>
  );
};

export default TournamentDetailView;
