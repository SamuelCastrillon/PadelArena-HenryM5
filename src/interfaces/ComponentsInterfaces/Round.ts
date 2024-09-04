import { IMatch } from "./Match";

export interface IRound {
  id: string;
  stage: string;
  matches: IMatch[];
}
