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
  finishTime: string;
  playingDay: string[];
  description: string;
  tournamentFlyer?: string;
  gallery?: string[];
  courtsAvailable: number;
  inscripciones: "abierta" | "cerrada";
  status: "por comenzar" | "en progreso" | "finalizado";
  category: ICategories;
  genero?: "femenino" | "masculino";
  teamsQuantity: number;
  matchDuration: number;
  fixture?: IFixture[];
  team?: ITeam[];
  matches?: IMatch[];
}