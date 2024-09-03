import React from "react";

interface IFixture {
  id: string;
  stage: string;
  date: string;
  time: string;
  matchId: number;
}

interface FixtureProps {
  fixtures: IFixture[];
}

const FixtureComponent: React.FC<FixtureProps> = ({ fixtures }) => {
  // Group fixtures by stage
  const stages = Array.from(new Set(fixtures.map((fixture) => fixture.stage)));

  return (
    <div className="flex flex-col items-center space-y-6 w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full relative">
        {stages.map((stage, stageIndex) => (
          <div key={stageIndex} className="flex flex-col items-center relative">
            <h3 className="text-2xl radhiumz uppercase text-white mb-4">
              {stage}
            </h3>
            <div className="flex flex-col items-center space-y-8 relative">
              {fixtures
                .filter((fixture) => fixture.stage === stage)
                .map((match, matchIndex) => (
                  <div
                    key={match.id}
                    className="p-4 border-2 border-white bg-blue-700/20 rounded-lg text-white sfRegular shadow-md w-40 flex flex-col items-center space-y-2 relative"
                  >
                    <p className="text-lg font-medium">{`Partido ${match.matchId}`}</p>
                    <p className="text-sm">{`Fecha: ${match.date}`}</p>
                    <p className="text-sm">{`Hora: ${match.time}`}</p>

                    {/* Horizontal Line Connector */}
                    {stageIndex < stages.length - 1 && (
                      <div className="absolute bg-white z-50 w-20 h-0.5 left-full top-1/2 transform translate-x-2"></div>
                    )}

                    {/* Vertical Line Connector */}
                    {matchIndex % 2 === 0 && stageIndex < stages.length - 1 && (
                      <div className="absolute bg-white z-50 w-0.5 h-48 left-full top-1/2 transform translate-x-2 -translate-y-4"></div>
                    )}
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FixtureComponent;
