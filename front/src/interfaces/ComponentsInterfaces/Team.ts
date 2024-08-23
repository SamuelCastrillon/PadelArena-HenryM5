import { IUserRegisterReq } from "../RequestInterfaces";
import { IMatch } from "./Match";
import { ITournament } from "./Tournament";
import { ICategories } from "./TournamentCategorias";

export interface ITeam {
  id: string;
  name: string;
  category: ICategories;
  users: Partial<IUserRegisterReq>[];
  tournament: ITournament;
  matches: IMatch[];
}
