"use client";
import React, { useContext } from "react";
import { AuthContext } from "@/context/GlobalContext";
import useTournamentData from "@/hooks/fetchTournamentData";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { useRouter } from "next/navigation";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";

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

  const userCategoryName = currentUser?.category?.name;

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

  //CON LOS TOURNAMENTS POSTA
  // Verifica si tournaments tiene datos
  // if (!tournaments || tournaments.length === 0) {
  //   return (
  //     <div className="w-full flex flex-col items-center bg-white p-4 mt-10">
  //       <h1 className="text-2xl radhiumz uppercase mb-4">
  //         No hay torneos disponibles para mostrar.
  //       </h1>
  //     </div>
  //   );
  // }

  // const userTeams = tournaments.flatMap(
  //   (tournament) =>
  //     tournament.team?.filter((team) =>
  //       team.users.some((user) => user.id === currentUser?.id)
  //     ) || []
  // );
  // const userTournaments = tournaments.filter((tournament) =>
  //   tournament.team?.some(
  //     (team) =>
  //       userTeams.some((userTeam) => userTeam.id === team.id) &&
  //       tournament.inscription === "abiertas"
  //   )
  // );

  const handleViewDetails = (tournamentId: string) => {
    router.push(`/tournaments/${tournamentId}`);
  };

  return (
    <div className="w-full flex flex-col items-center bg-white p-4 mt-10">
      <h1 className="text-2xl radhiumz uppercase mb-4">
        Torneos en los que estás inscrito:{" "}
        <span className="text-blue-600">{currentUser?.name}</span>
      </h1>
      <CustomTable
        headers={["Nombre", "Categoría", "Inscripción", "Estado", "Acciones"]}
      >
        {userTournaments.map((tournament) => (
          <tr key={tournament.id} className="border-t-2 border-lime sfBold">
            <td className="px-4 py-2 ">{tournament.name}</td>
            <td className="px-4 py-2 ">{tournament.category?.name || "N/A"}</td>
            {tournament.inscription === "abiertas" ? (
              <td className="px-4 py-2 text-green-600 uppercase">
                {tournament.inscription}
              </td>
            ) : (
              <td className="px-4 py-2 text-red-700 uppercase ">
                {tournament.inscription}
              </td>
            )}

            <td className="px-4 py-2 ">{tournament.status}</td>
            <td className="px-4 py-2 ">
              <ActionButton
                className="bg-lime text-black px-4 py-2 radhiumz uppercase rounded hover:bg-blue-700 hover:text-white"
                onClick={() => handleViewDetails(tournament.id)}
              >
                Ver Detalle
              </ActionButton>
            </td>
          </tr>
        ))}
      </CustomTable>
    </div>
  );
};

export default UserTournaments;
