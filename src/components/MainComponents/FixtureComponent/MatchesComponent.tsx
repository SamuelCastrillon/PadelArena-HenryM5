import { AuthContext } from "@/context/GlobalContext";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { IMatch } from "@/interfaces/ComponentsInterfaces/Match";
import { selectWinner } from "@/Server/Fixture/selectWinner";
import React, { useState } from "react";

interface MatchProps {
  match: IMatch;
  setFixtureState: React.Dispatch<React.SetStateAction<IFixture | null>>;
}

const MatchesComponent: React.FC<MatchProps> = ({ match, setFixtureState }) => {
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const { currentUser } = React.useContext(AuthContext);
  const handleDropdownToggle = (matchId: string) => {
    setDropdownOpen(dropdownOpen === matchId ? null : matchId);
  };

  const handleSelectWinner = async (matchId: string, teamId: string) => {
    try {
      const response = await selectWinner(matchId, teamId);

      if (response.fixture) {
        setFixtureState(response.fixture);
        setDropdownOpen(null);
      } else {
        console.log("falta el fixture");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="p-2 border-2 border-white bg-blue-700/20 sfBold rounded-lg text-white shadow-md w-full md:w-36 flex flex-col items-center space-y-2 mb-6 ">
        <p className="text-xs">{`Ganador: ${match.teamWinner?.name}`}</p>
        <p className="text-xs">{`Fecha: ${match.date}`}</p>
        <p className="text-xs">{`Hora: ${match.time}`}</p>

        <div className="flex flex-col space-y-1 mt-2">
          {match?.teams?.map((team) => (
            <p key={team.id} className="text-xs">{`${team.name} `}</p>
          ))}

          {currentUser?.role === "admin" && match.teamWinner === null ? (
            <button
              onClick={() => handleDropdownToggle(match.id)}
              className="bg-lime text-black radhiumz uppercase text-xs px-4 py-2 rounded"
            >
              Seleccionar Ganador
            </button>
          ) : null}
          {dropdownOpen === match.id && (
            <div className="absolute w-full mt-2 bg-white text-black border border-gray-300 rounded shadow-lg">
              {match.teams.map((team) => (
                <button
                  key={team.id}
                  onClick={() => handleSelectWinner(match.id, team.id)}
                  className="block px-4 py-2 text-sm hover:bg-gray-200"
                >
                  {team.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MatchesComponent;
