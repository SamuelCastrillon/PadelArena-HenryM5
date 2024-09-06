import React, { useState, useEffect, useContext } from "react";
import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { getFixtureById } from "@/Server/Fixture/getFixtureById";
import { AuthContext } from "@/context/GlobalContext";
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

  // Placeholder para los stages si no hay fixture data
  const rounds = ["Octavos", "Cuartos", "Semifinal", "Final"];

  if (!fixture) return <div>No se encontró el fixture.</div>;

  return (
    <div className="flex w-full h-fit">
      {rounds.map((round, i) => (
        <RoundComponent
          key={i}
          stage={fixture.round[i] ? fixture.round[i] : rounds.length - i}
          setFixtureState={setFixture}
        />
      ))}
    </div>
  );
};

export default NewFixtureComponent;
