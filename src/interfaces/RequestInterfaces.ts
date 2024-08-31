//? User Interfaces

import { ICategories } from "./ComponentsInterfaces/TournamentCategorias";

export interface IUserLoginReq {
  email: string;
  password: string;
}

export interface IUserRegisterReq {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  country: string;
  city: string;
  phone: string;
  address: string;
  category: string;
}

export interface IUserGooglePut {
  id: string;
  name: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  profileImg: string;
  category: { name: string };
  role?: "admin" | "jugador";
}

export interface IUserLoginRes {
  message: string;
  token: string;
  userClean: IUserLogin;
}

export interface IUserLogin {
  //RESPUESTA DEL BACK DEL POST NEXT AUTH  SAVE CURRENT USER
  id: string;
  name: string;
  lastName?: string;
  email: string;
  password?: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  profileImg: string;
  role?: "admin" | "jugador";
  category: { name: string };
}

//? Tournament Interfaces

enum TeamsQuantity {
  Diesiseis = 16,
  Treintaidos = 32,
  Secentaidos = 64,
}

export interface ICreateTournamentReq {
  name: string;
  startDate: Date;
  startTime: string;
  endTime: string;
  playingDays: string[];
  teamsQuantity: TeamsQuantity;
  matchDuration: number;
  courts: number;
  description: string;
  tournamentFlyer: string;
  category: string;
}

export interface ICreateTournamentFormData {
  name: string;
  startDate: Date;
  startTime: string;
  endTime: string;
  Lunes?: ["on"] | [] | undefined;
  Martes?: ["on"] | [] | undefined;
  Miercoles?: ["on"] | [] | undefined;
  Jueves?: ["on"] | [] | undefined;
  Viernes?: ["on"] | [] | undefined;
  Sabado?: ["on"] | [] | undefined;
  Domingo?: ["on"] | [] | undefined;
  teamsQuantity: TeamsQuantity;
  matchDuration: number;
  courts: number;
  description: string;
  tournamentFlyer: string;
  category: string;
}

//? Category Interfaces

export interface ICategoryRes {
  id: string;
  name: string;
  description: string;
}

export interface IUserGoogle {
  name: string;
  email: string;
  image: string;
}

//? Payment Interfaces

export interface IProductPaymentDataReq {
  tournament: string;
  host: string;
  user: string;
  // notification_url: string;
}
