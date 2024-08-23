import { IUserLogin, IUserRegisterReq } from "../RequestInterfaces";
import { IMatch } from "./Match";
import { ITournament } from "./Tournament";
import { ICategories } from "./TournamentCategorias";

export interface ITeam {
  id: string;
  name: string;
  category: ICategories;
  users: Partial<IUserLogin>[];
  tournament: ITournament;
  matches: IMatch[];
}
