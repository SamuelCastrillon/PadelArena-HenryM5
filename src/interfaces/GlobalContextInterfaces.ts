import { IUserLogin } from "./RequestInterfaces";

export interface IAuthcontext {
  currentUser: IUserLogin | null;
  setCurrentUser: (currenUser: IUserLogin | null) => void;
  userIdGoogle: string | null;
  setUserIdGoogle: (userIdGoogle: string | null) => void;
}
