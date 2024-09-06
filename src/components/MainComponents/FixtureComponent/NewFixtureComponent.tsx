import React, { useState, useEffect, useContext } from "react";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { getFixtureById } from "@/Server/Fixture/getFixtureById";
import { AuthContext } from "@/context/GlobalContext";
import { selectWinner } from "@/Server/Fixture/selectWinner";
import RoundComponent from "./RoundComponent";

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
  }, []);

  const rounds = ["", "", "", ""];

  const handleDropdownToggle = (matchId: string) => {
    setDropdownOpen(dropdownOpen === matchId ? null : matchId);
  };

  if (!fixture) return <div>No se encontró el fixture.</div>;

  return (
    <div className="flex w-full bg-white h-96">
      {rounds.map((round, i) => {
        return (
          <RoundComponent
            key={i}
            stage={fixture.round[i] ? fixture.round[i] : rounds.length - i}
            setFixtureState={setFixture}
          />
        );
      })}
    </div>
  );
};

export default NewFixtureComponent;
