"use client";
import React, { useContext, useEffect, useState } from "react";
import useTournamentData from "@/hooks/fetchTournamentData";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { useRouter } from "next/navigation";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { getTeamsInTournament } from "@/Server/Tournament/Teams/getTeamsInTournament";
import { ITeam } from "@/interfaces/ComponentsInterfaces/Team";
import { getUserById } from "@/Server/User/getUserById";
import { AuthContext } from "@/context/GlobalContext";

const UserTournaments = () => {
  const { tournaments } = useTournamentData();
  const [userTournaments, setUserTournaments] = useState<ITournament[]>([]);
  const { currentUser } = useContext(AuthContext);
  const [teamsInTournaments, setTeamsInTournaments] = useState<{
    [key: string]: ITeam[];
  }>({});
  const router = useRouter();

  useEffect(() => {
    const fetchUserTournaments = async () => {
      try {
        // Obtener los equipos del usuario
        if (!currentUser) return;
        const userResponse = await getUserById(currentUser.id);
        const userTeams = userResponse.team || []; // Obtén los equipos del usuario
        console.log("User Teams:", userTeams);

        if (!tournaments || tournaments.length === 0 || userTeams.length === 0)
          return;

        const fetchedTeamsInTournaments: { [key: string]: ITeam[] } = {};
        const matchingTournaments: ITournament[] = [];

        for (const tournament of tournaments) {
          // Obtener equipos de cada torneo
          const response = await getTeamsInTournament(tournament.id);
          console.log(`Equipos en el Torneo "${tournament.name}":`, response);
          fetchedTeamsInTournaments[tournament.name] = response;

          // Verificar si el equipo del usuario está en el torneo
          const hasUserTeam = response.some((team: ITeam) =>
            userTeams.some((userTeam: ITeam) => userTeam.name === team.name)
          );

          if (hasUserTeam) {
            matchingTournaments.push(tournament);
          }
        }

        setTeamsInTournaments(fetchedTeamsInTournaments);
        setUserTournaments(matchingTournaments);
      } catch (error) {
        console.error("Error fetching user tournaments:", error);
      }
    };

    fetchUserTournaments();
  }, [tournaments]);

  const handleViewDetails = (tournamentId: string) => {
    router.push(`/tournaments/${tournamentId}`);
  };

  if (!userTournaments || userTournaments.length === 0) {
    return (
      <div className="w-full flex flex-col items-center bg-white p-4 mt-10">
        <h1 className="text-2xl radhiumz uppercase mb-4">
          No hay torneos disponibles para mostrar.
        </h1>
      </div>
    );
  }

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
            <td className="px-4 py-2">{tournament.name}</td>
            <td className="px-4 py-2">{tournament.category?.name || "N/A"}</td>
            {tournament.inscription === "abiertas" ? (
              <td className="px-4 py-2 text-green-600 uppercase">
                {tournament.inscription}
              </td>
            ) : (
              <td className="px-4 py-2 text-red-700 uppercase">
                {tournament.inscription}
              </td>
            )}
            <td className="px-4 py-2">{tournament.status}</td>
            <td className="px-4 py-2">
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
