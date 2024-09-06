import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";
import { IMatch } from "@/interfaces/ComponentsInterfaces/Match";
import { IStages } from "@/interfaces/ComponentsInterfaces/Round";
import React from "react";
import MatchesComponent from "./MatchesComponent";

interface RoundComponentProps {
  stage: IStages | number;
  setFixtureState: React.Dispatch<React.SetStateAction<IFixture | null>>;
}

const RoundComponent: React.FC<RoundComponentProps> = ({
  stage,
  setFixtureState,
}) => {
  // Si stage es un objeto con la propiedad `stage`, mostrar su nombre
  //const stageName = typeof stage === "object" ? stage.stage : "Próximamente";
  const stageNumber = [];

  if (typeof stage === "number") {
    for (let i = 0; i < stage; i++) {
      stageNumber.push(i);
    }
  }

  return (
    <div className="border-2 border-red-600 w-full">
      {/* <h1 className="text-2xl radhiumz text-white uppercase text-center mb-14">
        {stageName}
      </h1>
      {typeof stage === "object" && stage.matches.length > 0 ? (
        stage.matches.map((match: IMatch) => (
          <MatchesComponent
            key={match.id}
            match={match}
            setFixtureState={setFixtureState}
          />
        ))
      ) : (
        <div>
          <h1 className="text-xl text-center mt-4">No hay partidos aún</h1>
        </div>
      )} */}
      {typeof stage === "number"
        ? stageNumber.map((num) => (
            <div key={num}>
              <h1 className=" w-3/4 mx-auto mb-6 text-lg radhiumz text-white uppercase text-center border-2 border-white rounded-lg bg-blue-700/30 px-4 py-2">
                Proximamente
              </h1>
            </div>
          ))
        : stage.matches.map((match: IMatch) => (
            <MatchesComponent
              key={match.id}
              match={match}
              setFixtureState={setFixtureState}
            />
          ))}
    </div>
  );
};

export default RoundComponent;
