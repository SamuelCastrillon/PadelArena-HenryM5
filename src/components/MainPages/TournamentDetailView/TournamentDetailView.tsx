"use client";
import ReusableModal from "@/components/GeneralComponents/Modal/ReusableModal";
import { NavigateButton } from "@/components/GeneralComponents/NavigateButton/NavigateButton";
import Card from "@/components/MainComponents/ReusableCard/ReusableCard";
import { AuthContext } from "@/context/GlobalContext";
import { formatDate, formatTime } from "@/helpers/dateTimeHelper";
import { ITeam } from "@/interfaces/ComponentsInterfaces/Team";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import { IProductPaymentDataReq } from "@/interfaces/RequestInterfaces";
import postPaymentToMP from "@/Server/PaymentByMP/PaymentByMP";
import { useRouter } from "next/navigation";
import React, { useContext, useState } from "react";

import { fixture } from "@/helpers/fixtureData";
import NewFixtureComponent from "@/components/MainComponents/FixtureComponent/NewFixtureComponent";

interface TournamentDetailViewProps {
  tournament: ITournament;
  currentHost: string;
}

const TournamentDetailView: React.FC<TournamentDetailViewProps> = ({
  tournament,
  currentHost,
}) => {
  const { currentUser } = useContext(AuthContext);
  const user = currentUser;
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blurBackground, setBlurBackground] = useState(true);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // useEffect(() => {
  //   const fetchTeams = async () => {
  //     if (user) {
  //       try {
  //         const teams = await getTeamsInTournament(tournament.id);
  //         const userIsRegistered = teams.some((team: ITeam) =>
  //           team.users.some((u) => u.id === user.id)
  //         );
  //         setIsUserRegistered(userIsRegistered);
  //       } catch (error) {
  //         console.error("Error fetching teams:", error);
  //       }
  //     }
  //   };
  //   fetchTeams();
  // }, [user, tournament.id]);

  // Manejo de redireccionamiento
  const TOURNAMENT_REGISTER_URL: string = `${currentHost}/tournaments/register`;
  console.log(TOURNAMENT_REGISTER_URL);

  // Manejo de inscripción
  const handleInscriptionClick = async () => {
    if (user) {
      const data: IProductPaymentDataReq = {
        tournament: tournament.id,
        host: TOURNAMENT_REGISTER_URL,
        user: user.id,
      };
      try {
        const responseUrl = await postPaymentToMP(data);
        if (!responseUrl.redirectUrl) {
          throw new Error("Error al realizar el pago");
        }
        router.push(`${responseUrl.redirectUrl}`);
      } catch (error) {
        console.error(error);
      }
    } else {
      router.push("/register");
    }
  };

  const getImageUrl = (src: string) => {
    const defaultImage = "/images/default-image.jpg";
    const isValidUrl =
      src.startsWith("http://") ||
      src.startsWith("https://") ||
      src.startsWith("/");
    return isValidUrl ? src : defaultImage;
  };

  const statusColor =
    tournament.inscription === "abiertas"
      ? "text-lime radhiumz text-4xl md:text-6xl uppercase"
      : "text-red-500 radhiumz text-4xl md:text-6xl uppercase";
  const statusText =
    tournament.inscription === "abiertas"
      ? "Inscripción Abierta"
      : "Inscripción Cerrada";

  const isUserRegistered =
    tournament.team?.some((team: ITeam) =>
      team.users?.some((userInTeam) => userInTeam.id === user?.id)
    ) ?? false;

  const fixtureHeaders = [
    "Etapa",
    "Fecha",
    "Hora",
    "Equipos",
    "Partidos",
    "Ganadores",
    "Perdedores",
  ];

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
          <h1 className="text-2xl text-white radhiumz lg:text-4xl">
            Vuelve a torneos
          </h1>
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
            Inscripciones:
              tournament.inscription.toUpperCase() ??
              "Aun en proceso de definir",
          }}
          additionalComponent={
            tournament.plusCode &&
            tournament.plusCode.trim() !== "" && (
              <div className="mt-4">
                <h3 className="text-lg md:text-xl text-black sfBold">
                  Ubicación:
                </h3>
                <iframe
                  src={`https://www.google.com/maps/embed/v1/place?key=${
                    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
                  }&q=${encodeURIComponent(tournament.plusCode)}`}
                  width="100%"
                  height="450"
                  className="w-full h-80 rounded-md shadow-md"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"></iframe>
              </div>
            )
          }
        />

        {tournament.inscription === "abiertas" && user?.role !== "admin" && (
          <div className="flex justify-center w-full mx-auto mt-8 mb-8">
            {isUserRegistered ? (
              <p className="w-full px-12 py-6 text-xl text-center text-white uppercase bg-gray-400 rounded-xl radhiumz">
                Ya estás inscrito
              </p>
            ) : (
              <button
                onClick={handleInscriptionClick}
                className="w-full px-12 py-6 text-xl text-black uppercase bg-white shadow-lg rounded-xl shadow-blue-700 radhiumz">
                Inscribite
              </button>
            )}
          </div>
        )}

        <div className="flex justify-center w-full mx-auto mt-4">
          <button
            onClick={openModal}
            className="rounded-md w-[100%] h-fit p-2 mb-6  bg-lime text-xs text-black hover:shadow-lg hover:shadow-blue-700 radhiumz uppercase">
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

      {/* Modal del Fixture 
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blurBackground={blurBackground}
        backgroundColor="bg-white"
        textColor="text-black"
        className="w-full max-w-screen-lg shadow-lg shadow-lime"
        bgImageUrl={tournament.tournamentFlyer}
      >
        <h2 className="mb-4 text-4xl text-white uppercase radhiumz">{`Fixture: ${tournament.name}`}</h2>

        <CustomTable headers={fixtureHeaders}>
          {Array.isArray(tournament?.fixture) &&
          tournament?.fixture?.length > 0 ? (
            tournament.fixture.map((match: IFixture) => (
              <tr key={match.id}>
                <td className="px-4 py-2 border-b">{match.stage}</td>
                <td className="px-4 py-2 border-b">{match.date}</td>
                <td className="px-4 py-2 border-b">{match.time}</td>
                <td className="px-4 py-2 border-b">{match.matchId}</td>
                <td className="px-4 py-2 border-b">{match.tournamentId}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td className="py-2 text-xl border-b" colSpan={8}>
                No hay fixture para este torneo
              </td>
            </tr>
          )}
        </CustomTable>
      </ReusableModal>
      */}
      {/* Modal del Fixture 
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blurBackground={blurBackground}
        backgroundColor="bg-white"
        textColor="text-black"
        className="w-full max-w-screen-lg shadow-lg shadow-lime"
        bgImageUrl={tournament.tournamentFlyer}
      >
        <h2 className="mb-4 text-4xl text-white uppercase radhiumz">{`Fixture: ${tournament.name}`}</h2>
        {tournament.fixture && tournament.fixture.length > 0 ? (
          <FixtureComponent fixtures={tournament.fixture} />
        ) : (
          <p className="text-xl text-center">No hay fixture para este torneo</p>
        )}
      </ReusableModal>
      */}
      <ReusableModal
        isOpen={isModalOpen}
        onClose={closeModal}
        blurBackground={blurBackground}
        backgroundColor="bg-white"
        textColor="text-black"
        className="shadow-lg shadow-lime w-full max-w-screen-lg h-auto max-h-[80vh] overflow-y-auto"
        bgImageUrl={tournament.tournamentFlyer}>
        <h2 className="mb-2 text-4xl text-white uppercase radhiumz">{`Fixture: ${tournament.name}`}</h2>
        <hr className="w-full h-2 mb-6"></hr>

        {tournament.fixture?.id ? (
          <NewFixtureComponent fixtureId={tournament.fixture.id} />
        ) : (
          <p className="text-xl text-center">
            No hay fixture disponible para este torneo.
          </p>
        )}
      </ReusableModal>
    </div>
  );
};

export default TournamentDetailView;
