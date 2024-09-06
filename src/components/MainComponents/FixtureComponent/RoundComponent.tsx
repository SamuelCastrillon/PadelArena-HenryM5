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
  const stageNumber = [];

  if (typeof stage === "number") {
    for (let i = 0; i < stage; i++) {
      stageNumber.push(i);
    }
  }

  return (
    <div className="border-2 border-red-600 w-full">
      {typeof stage === "number"
        ? stageNumber.map((num) => (
            <div key={num}>
              <h1 className="text-2xl font-bold text-center">Proximamente</h1>
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
