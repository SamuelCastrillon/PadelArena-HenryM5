import { IUserLogin } from "./RequestInterfaces";

export interface IAuthcontext {
  currentUser: IUserLogin | null;
  setCurrentUser: (currenUser: IUserLogin | null) => void;
}
