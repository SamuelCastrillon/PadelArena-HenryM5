import { useState, useEffect, useCallback } from "react";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture"; // Asegúrate de que la ruta sea correcta
import { getFixtureById } from "@/Server/Fixture/getFixtureById";
import { selectWinner } from "@/Server/Fixture/selectWinner";
import { getOneTeam } from "@/Server/Tournament/getOneTeam";

export const useFixtureData = (fixtureId: string) => {
  const [fixture, setFixture] = useState<IFixture | null>(null);
  const [winnerNames, setWinnerNames] = useState<{ [key: string]: string }>({});
  const [selectedWinner, setSelectedWinner] = useState<string | null>(null);

  const fetchFixtureData = useCallback(async () => {
    try {
      const response: IFixture = await getFixtureById(fixtureId);

      const winnerNamePromises = response.round.flatMap((round) =>
        round.matches.map(async (match) => {
          if (match.teamWinner) {
            const teamWinner = await getOneTeam(match.teamWinner);
            return { [match.id]: teamWinner.name };
          }
          return null;
        })
      );

      const resolvedWinnerNames = await Promise.all(winnerNamePromises);
      const winnerNamesMap = Object.assign(
        {},
        ...resolvedWinnerNames.filter((item) => item !== null)
      );

      setFixture(response);
      setWinnerNames(winnerNamesMap);
    } catch (error) {
      console.log(error);
    }
  }, [fixtureId]);

  useEffect(() => {
    fetchFixtureData();
  }, [fetchFixtureData]);

  const handleSelectWinner = async (matchId: string, teamId: string) => {
    try {
      await selectWinner(matchId, teamId);
      const teamWinner = await getOneTeam(teamId);
      setWinnerNames((prev) => ({ ...prev, [matchId]: teamWinner.name }));
      setSelectedWinner(teamId);

      fetchFixtureData();
    } catch (error) {
      console.log(error);
    }
  };

  return { fixture, winnerNames, handleSelectWinner };
};
