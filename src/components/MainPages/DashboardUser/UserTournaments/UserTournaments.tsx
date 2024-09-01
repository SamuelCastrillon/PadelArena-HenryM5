"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/GlobalContext";
import useTournamentData from "@/hooks/fetchTournamentData";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { useRouter } from "next/navigation";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

// Datos de torneos (pueden venir de un hook o de una API)
const tournamentsData: ITournament[] = [
  {
    id: "ae1da3dd-3844-4499-9764-f0ffab34fa20",
    name: "Summer Padel Cup",
    startDate: "2024-06-01",
    endDate: "2024-06-15",
    startingTime: "09:00",
    finishTime: "17:00",
    playingDay: ["2024-06-01", "2024-06-02"],
    description: "Un torneo emocionante de verano.",
    tournamentFlyer: "url/to/flyer.jpg",
    gallery: ["url/to/image1.jpg", "url/to/image2.jpg"],
    courtsAvailable: 5,
    inscription: "abiertas",
    status: "por comenzar",
    category: {
      id: "207a290d-bd10-432a-8a71-bc625b68ab37",
      name: "Segunda",
      description:
        "Jugadores de pádel en un nivel avanzado, pero no tan competitivo como la Categoría A.",
    },
    genero: "masculino",
    teamsQuantity: 10,
    matchDuration: 60,
    fixture: [],
    team: [
      {
        id: "1",
        name: "Equipo A",
        category: {
          id: "207a290d-bd10-432a-8a71-bc625b68ab37",
          name: "Segunda",
          description:
            "Jugadores de pádel en un nivel avanzado, pero no tan competitivo como la Categoría A.",
        },
        users: [{ id: "2fdb8177-9457-421f-bc91-ec1d69bc585d" }],
        tournament: {
          id: "1",
          name: "Torneo de Verano",
          startDate: "2024-06-01",
          endDate: "2024-06-15",
          startingTime: "09:00",
          finishTime: "17:00",
          playingDay: ["2024-06-01", "2024-06-02"],
          description: "Un torneo emocionante de verano.",
          tournamentFlyer: "url/to/flyer.jpg",
          gallery: ["url/to/image1.jpg", "url/to/image2.jpg"],
          courtsAvailable: 5,
          inscription: "abiertas",
          status: "por comenzar",
          category: {
            id: "207a290d-bd10-432a-8a71-bc625b68ab37",
            name: "Segunda",
            description:
              "Jugadores de pádel en un nivel avanzado, pero no tan competitivo como la Categoría A.",
          },
          genero: "masculino",
          teamsQuantity: 10,
          matchDuration: 60,
          fixture: [],
          team: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
];

const UserTournaments = () => {
  // Obtiene el contexto del usuario
  const { currentUser } = useContext(AuthContext);
  const { tournaments } = useTournamentData();

  // Verifica el contexto del usuario
  console.log("Usuario actual:", currentUser);

  // Obtiene la categoría del usuario
  const userCategoryName = currentUser?.category?.name;

  console.log("Nombre de categoría del usuario:", userCategoryName);

  // Filtra los torneos basados en el nombre de la categoría del usuario y el estado de inscripción
  const filteredTournaments = tournamentsData.filter(
    (tournament) =>
      tournament.category.name === userCategoryName && // Coincide con el nombre de la categoría del usuario
      tournament.inscription === "abiertas" // Inscripciones abiertas
  );
  const router = useRouter();
  const userTeams = tournamentsData.flatMap(
    (tournament) =>
      tournament.team?.filter((team) =>
        team.users.some((user) => user.id === currentUser?.id)
      ) || []
  );
  const userTournaments = tournamentsData.filter((tournament) =>
    tournament.team?.some(
      (team) =>
        userTeams.some((userTeam) => userTeam.id === team.id) &&
        tournament.inscription === "abiertas"
    )
  );

  // // Obtén la lista de equipos en los que el usuario está inscrito
  // const userTeams = tournaments.flatMap(
  //   (tournament) =>
  //     tournament.team?.filter((team) =>
  //       team.users.some((user) => user.id === currentUser?.id)
  //     ) || []
  // );

  // Filtra los torneos en los que el usuario está inscrito
  // const userTournaments = tournaments.filter((tournament) =>
  //   tournament.team?.some(
  //     (team) =>
  //       userTeams.some((userTeam) => userTeam.id === team.id) &&
  //       tournament.inscription === "abiertas"
  //   )
  // );

  const handleViewDetails = (tournamentId: string) => {
    // Navega a la página de detalles del torneo
    router.push(`/tournaments/${tournamentId}`);
  };

  return (
    <div className="w-full flex flex-col items-center bg-white p-10 mt-10">
      <h1 className="text-3xl radhiumz uppercase mb-4">
        Torneos en los que estás inscrito
      </h1>
      <CustomTable
        headers={[
          "Nombre del Torneo",
          "Categoría",
          "Estado de Inscripción",
          "Estado del Torneo",
          "Acciones",
        ]}
      >
        {userTournaments.map((tournament) => (
          <tr key={tournament.id}>
            <td className="px-4 py-2">{tournament.name}</td>
            <td className="px-4 py-2">{tournament.category?.name || "N/A"}</td>
            <td className="px-4 py-2">{tournament.inscription}</td>
            <td className="px-4 py-2">{tournament.status}</td>
            <td className="px-4 py-2">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => handleViewDetails(tournament.id)}
              >
                Ver Detalle
              </button>
            </td>
          </tr>
        ))}
      </CustomTable>
    </div>
  );
};

export default UserTournaments;
