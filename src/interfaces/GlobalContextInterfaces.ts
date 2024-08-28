import { IUserLogin } from "./RequestInterfaces";

export interface IAuthcontext {
  currentUser: IUserLogin | null;
  setCurrentUser: (currenUser: IUserLogin | null) => void; //LO USO PARA RESPUESTA DEL POST DE NEXT AUTH DEL BACK
  userIdGoogle: string | null;
  setUserIdGoogle: (userIdGoogle: string | null) => void;
}
