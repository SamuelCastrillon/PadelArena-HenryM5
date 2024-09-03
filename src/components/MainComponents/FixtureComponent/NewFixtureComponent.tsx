import React, { useEffect, useState } from "react";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture"; // Asegúrate de que la ruta sea correcta
import { getFixtureById } from "@/Server/Fixture/getFixtureById";

interface FixtureProps {
  fixtureId: string;
}

const NewFixtureComponent: React.FC<FixtureProps> = ({ fixtureId }) => {
  console.log(fixtureId);
  const [fixture, setFixture] = useState<IFixture | null>(null);

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

  if (!fixture) return <div>No se encontró el fixture.</div>;
  const stages = Array.from(
    new Set(fixture?.round.map((round) => round.stage))
  );

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
        {/* Mapear cada etapa única para crear una sección de etapas */}
        {stages.map((stage, stageIndex) => (
          <div key={stageIndex} className="flex flex-col items-center">
            <h3 className="text-2xl uppercase text-white mb-4">{stage}</h3>
            <div className="grid grid-cols-1 gap-4 w-full">
              {/* Filtrar y mapear rounds para la etapa actual */}
              {fixture.round
                .filter((round) => round.stage === stage)
                .map((round) => (
                  <div
                    key={round.id}
                    className="flex flex-col items-center mb-8"
                  >
                    {round.matches.map((match) => (
                      <div
                        key={match.id}
                        className="p-4 border-2 border-white bg-blue-700/20 rounded-lg text-white shadow-md w-full md:w-48 flex flex-col items-center space-y-2"
                      >
                        <p className="text-sm font-medium">{`Partido ${match.id}`}</p>
                        <p className="text-xs">{`Fecha: ${match.date}`}</p>
                        <p className="text-xs">{`Hora: ${match.time}`}</p>
                        <p className="text-xs">{`Ganador: ${
                          match.teamWinner ? match.teamWinner : "Por decidir"
                        }`}</p>

                        {/* Mostrar equipos */}
                        <div className="flex flex-col space-y-1 mt-2">
                          {match.teams.map((team) => (
                            <p key={team.id} className="text-xs">{`${
                              team.name
                            } ${
                              team.ableForPlay
                                ? "(Apto para jugar)"
                                : "(No apto)"
                            }`}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFixtureComponent;
