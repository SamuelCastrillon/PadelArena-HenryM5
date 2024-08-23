import { IFixture } from "./Fixture";
import { IMatch } from "./Match";
import { ITeam } from "./Team";
import { ICategories } from "./TournamentCategorias";

export interface ITournament {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  startingTime: string;
  finishingTime: string;
  playingDays: string[];
  description: string;
  tournamentFlyer: string;
  gallery?: string[];
  courtsAvailable: number;
  inscripciones: "abierta" | "cerrada";
  status: "upcoming" | "inProgress" | "finished";
  category: ICategories;
  genero?: "femenino" | "masculino";
  teamsQuantity: number;
  matchDuration: number;
  fixture?: IFixture[];
  team?: ITeam[];
  matches?: IMatch[];
}
