"use client";
import React, { useContext, useEffect, useState } from "react";
import useTournamentData from "@/hooks/fetchTournamentData";
import CustomTable from "@/components/GeneralComponents/CustomTable/CustomTable";
import { useRouter } from "next/navigation";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
import ActionButton from "@/components/GeneralComponents/ActionButton/ActionButton";
import { getUserTournament } from "@/Server/User/getUserTournament";
import { AuthContext } from "@/context/GlobalContext";
import { ITeam } from "@/interfaces/ComponentsInterfaces/Team";

const UserTournaments = () => {
  const { tournaments } = useTournamentData();
  const [userTournaments, setUserTournaments] = useState<ITournament[]>([]); // Cambia a un array de torneos
  const { currentUser } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    const fetchUserTournaments = async () => {
      try {
        if (!currentUser) return;
        const userResponse = await getUserTournament(currentUser.id);
        console.log(userResponse.team.map((t: ITeam) => t.tournament)); // Verifica que datos se están recibiendo
        setUserTournaments(userResponse.team.map((t: ITeam) => t.tournament)); // Asegúrate de que `team` y `tournament` están en el formato esperado
      } catch (error) {
        console.error("Error fetching user tournaments:", error);
      }
    };

    fetchUserTournaments();
  }, [currentUser]);

  const handleViewDetails = (tournamentId: string) => {
    router.push(`/tournaments/${tournamentId}`);
  };

  if (userTournaments.length === 0) {
    // Cambiado de null a longitud del array
    return (
      <div className="w-full flex flex-col items-center bg-white p-4 mt-10">
        <h1 className="text-2xl radhiumz uppercase mb-4">
          No hay torneos disponibles para mostrar.
        </h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center bg-transparent border-2 border-lime rounded-lg p-4 mt-10">
      <h1 className="text-2xl text-white radhiumz uppercase mb-4">
        Torneos en los que estás inscrito:{" "}
        <span className="text-lime">{currentUser?.name}</span>
      </h1>
      <CustomTable
        headers={["Nombre", "Categoría", "Inscripción", "Estado", "Acciones"]}
      >
        {userTournaments.map((tournament) => (
          <tr key={tournament.id} className="border-t-2 border-lime sfBold">
            <td className="px-4 py-2">{tournament.name}</td>
            <td className="px-4 py-2">{tournament.category?.name || "N/A"}</td>
            <td
              className={`px-4 py-2 ${
                tournament.inscription === "abiertas"
                  ? "text-green-600"
                  : "text-red-700"
              } uppercase`}
            >
              {tournament.inscription}
            </td>
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
