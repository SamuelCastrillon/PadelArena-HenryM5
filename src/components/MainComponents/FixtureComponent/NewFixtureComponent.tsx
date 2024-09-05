import React, { useState, useEffect, useContext } from "react";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { getFixtureById } from "@/Server/Fixture/getFixtureById";
import { AuthContext } from "@/context/GlobalContext";
import { selectWinner } from "@/Server/Fixture/selectWinner";
import { ITeam } from "@/interfaces/ComponentsInterfaces/Team";

interface FixtureProps {
  fixtureId: string;
}

const NewFixtureComponent: React.FC<FixtureProps> = ({ fixtureId }) => {
  const [fixture, setFixture] = useState<IFixture | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);

  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const getFixture = async () => {
      try {
        const response: IFixture = await getFixtureById(fixtureId);
        setFixture(response);
      } catch (error) {
        console.log(error);
      }
    };

    getFixture();
  }, [fixtureId]);

  const handleDropdownToggle = (matchId: string) => {
    setDropdownOpen(dropdownOpen === matchId ? null : matchId);
  };

  const handleSelectWinner = async (matchId: string, teamId: string) => {
    try {
      const response = await selectWinner(matchId, teamId);
      console.log(response);

      console.log(response.matches, response.stage);
      if (response.stage !== undefined && response.matches !== undefined) {
        if (fixture && fixture.id) {
          const newFixture = {
            ...fixture,
            round: [...fixture.round, response],
          };
          setFixture(newFixture);
        } else {
          console.error("Fixture object is missing id property");
        }
      }
      setDropdownOpen(null);
    } catch (error) {
      console.log(error);
    }
  };

  if (!fixture) return <div>No se encontró el fixture.</div>;

  const stagesConfig: { [key: string]: number } = {
    Octavos: 8,
    Cuartos: 4,
    Semifinal: 2,
    Final: 1,
  };

  const stages = Object.keys(stagesConfig);

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full ">
        {stages.map((stage, stageIndex) => {
          const roundsForStage = fixture.round?.filter(
            (round) => round.stage.toLowerCase() === stage.toLowerCase()
          );

          const cardsToRender = roundsForStage.flatMap((round, roundIndex) =>
            round.matches.map((match, matchIndex) => (
              <div
                key={`${roundIndex}-${matchIndex}`}
                className="p-4 border-2 border-white bg-blue-700/20 sfBold rounded-lg text-white shadow-md w-full md:w-48 flex flex-col items-center space-y-2 mb-6 "
              >
                <p className="text-xs">{`Fecha: ${match.date}`}</p>
                <p className="text-xs">{`Hora: ${match.time}`}</p>

                <div className="flex flex-col space-y-1 mt-2">
                  {match?.teams?.map((team) => (
                    <p key={team.id} className="text-xs">{`${team.name} `}</p>
                  ))}
                </div>

                {/* Mostrar el botón y el dropdown solo para administradores */}
                {currentUser?.role === "admin" && match.teamWinner === null && (
                  <div className="relative mt-4 ">
                    <button
                      onClick={() => handleDropdownToggle(match.id)}
                      className="bg-lime text-black radhiumz uppercase text-xs px-4 py-2 rounded"
                    >
                      Seleccionar Ganador
                    </button>

                    {dropdownOpen === match.id && (
                      <div className="absolute w-full mt-2 bg-white text-black border border-gray-300 rounded shadow-lg">
                        {match.teams.map((team) => (
                          <button
                            key={team.id}
                            onClick={() =>
                              handleSelectWinner(match.id, team.id)
                            }
                            className="block px-4 py-2 text-sm hover:bg-gray-200"
                          >
                            {team.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          );

          const cardsToFill = Math.max(
            stagesConfig[stage] - cardsToRender.length,
            0
          );

          const additionalCards = Array.from(
            { length: cardsToFill },
            (_, index) => (
              <div
                key={`proximamente-${stageIndex}-${index}`}
                className="p-4 border-2 border-white bg-blue-700/20 sfBold rounded-lg text-white shadow-md w-full md:w-48 flex flex-col items-center space-y-2 mb-6"
              >
                <p className="text-white text-center">Próximamente</p>
              </div>
            )
          );

          const marginTop =
            stageIndex === 1
              ? "mt-10"
              : stageIndex === 2
              ? "mt-20"
              : stageIndex === 3
              ? "mt-32"
              : "";

          return (
            <div key={stageIndex} className="flex flex-col items-center ">
              <h3 className="text-2xl uppercase text-white mb-4 radhiumz">
                {stage}
              </h3>
              <div className={`grid grid-cols-1 gap-4 w-full  ${marginTop}`}>
                {cardsToRender}
                {additionalCards}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default NewFixtureComponent;
