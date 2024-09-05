import { IRound } from "./Round";
import { ITeam } from "./Team";
import { ITournament } from "./Tournament";

export interface IMatch {
  id: string;
  date: string;
  time: string;
  teams: ITeam[];
  tournament?: ITournament;
  teamWinner: string;
  round?: IRound;
}
