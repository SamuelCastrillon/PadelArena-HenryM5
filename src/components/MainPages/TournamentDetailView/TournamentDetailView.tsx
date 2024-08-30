"use client";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import { formatDate, formatTime } from "@/helpers/dateTimeHelper";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import React, { useState } from "react";

interface TournamentDetailViewProps {
  tournament: ITournament;
}

const TournamentDetailView: React.FC<TournamentDetailViewProps> = ({ tournament }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blurBackground, setBlurBackground] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") || src.startsWith("https://") || src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  const statusColor =
    tournament.inscription === "abiertas"
      ? "text-lime radhiumz text-4xl md:text-6xl uppercase"
      : "text-red-500 radhiumz text-4xl md:text-6xl uppercase";
  const statusText =
    tournament.inscription === "abiertas" ? "Inscripción Abierta" : "Inscripción Cerrada";

  return (
    <div className="flex flex-col items-center p-8 mt-20 bg-blue-700/20 rounded-xl">
      {/* Status del Torneo */}
      <div className={`mb-4 w-full text-center ${statusColor}`}>
        {statusText}
        <hr className="w-full my-2 text-white" />
      </div>

      {/* Botón de Navegación */}
      <div className="flex items-center mb-10">
        <NavigateButton href="/tournaments" className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
          <h1 className="text-2xl text-white radhiumz lg:text-4xl">Vuelve a torneos</h1>
        </NavigateButton>
      </div>

      {/* Detalle del Torneo */}
      <div className="w-full mx-auto mb-20 md:w-3/4 lg:w-2/3 xl:w-1/2">
        <Card
          imageUrl={getImageUrl(tournament.tournamentFlyer ?? "")}
          title={tournament.name}
          description={tournament.description}
          className="shadow-lg rounded-2xl shadow-lime"
          additionalInfo={{
            "Fecha de inicio": formatDate(tournament.startDate),
            "Fecha de fin": formatDate(tournament.endDate),
            "Hora de inicio": formatTime(tournament.startingTime),
            "Hora de finalización": formatTime(tournament.finishTime),
            "Canchas disponibles": tournament.courtsAvailable.toString(),
            "Días de juego": tournament.playingDay?.toString(),
            Categoría: tournament.category.name,
            Género: tournament.genero ?? "Esta por verse",
            Inscripciones: tournament.inscription ?? "Aun en proceso de definir",
          }}
        />

        {/* Botón de Inscripción */}
        {/* {tournament.inscripciones === "abierta" && ( */}
        {tournament && ( // TODO: Comente el codigo de arriva de manera temporar paar ahacer pruebas
          <div className="flex justify-center w-full mx-auto mt-8 mb-8">
            <NavigateButton
              href={`/tournaments/register/${tournament.id}`}
              className="w-full px-12 py-6 text-xl text-black uppercase bg-white shadow-lg rounded-xl shadow-blue-700 radhiumz">
              Inscribite
            </NavigateButton>
          </div>
        )}

        {/* Botón para Fixture */}
        <div className="flex justify-center w-full mx-auto mt-4">
          <button
            onClick={openModal}
            className="w-full h-12 max-w-xs px-10 py-4 text-black bg-lime radhiumz">
            Ver Fixture
          </button>
        </div>
      </div>

      {/* Animación de bolas verdes cuando el modal está abierto */}
      {isModalOpen && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 rounded-full bg-lime animate-bounce-ball"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
              }}></div>
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
        bgImageUrl={tournament.tournamentFlyer}>
        <h2 className="text-4xl radhiumz text-lime">{`Fixture: ${tournament.name}`}</h2>
        <hr className="h-1 mb-4 bg-lime"></hr>
        <table className="w-full text-left bg-white table-auto min-w-max">
          <thead className="text-white bg-zinc-800">
            <tr>
              <th className="px-4 py-2 border-b">Etapa</th>
              <th className="px-4 py-2 border-b">Fecha</th>
              <th className="px-4 py-2 border-b">Hora</th>
            </tr>
          </thead>
          <tbody>
            {tournament.fixture && tournament.fixture.length > 0 ? (
              tournament.fixture.map((match) => (
                <tr key={match.id}>
                  <td className="px-4 py-2 border-b">{match.stage}</td>
                  <td className="px-4 py-2 border-b">{match.date}</td>
                  <td className="px-4 py-2 border-b">{match.time}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="px-4 py-2 border-b" colSpan={3}>
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
