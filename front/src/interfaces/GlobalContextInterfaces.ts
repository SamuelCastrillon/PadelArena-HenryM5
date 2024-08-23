import { IUserLoginRes } from "./RequestInterfaces";

export interface IAuthcontext {
  currentUser: IUserLoginRes | null;
  setCurrentUser: (currenUser: IUserLoginRes | null) => void;
}
