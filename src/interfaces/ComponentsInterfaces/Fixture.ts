import { IMatch } from "./Match";
import { IRound } from "./Round";
import { ITournament } from "./Tournament";

export interface IFixture {
  id: string;
  round: IRound[];
}
