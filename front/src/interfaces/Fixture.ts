import { IMatch } from "./Match";
import { ITournament } from "./Tournament";

export interface IFixture {
  id: string;
  stage: string;
  date: string;
  time: string;
  matchId: number;
  tournamentId: number;
}
