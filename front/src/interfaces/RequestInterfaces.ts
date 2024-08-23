//? User Interfaces

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
}

export interface IUserLoginRes {
  message: string;
  token: string;
  userClean: IUserLogin;
}

export interface IUserLogin {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  profileImg: string;
}

//? Tournament Interfaces

enum Days {
  Lunes = "Lunes",
  Martes = "Martes",
  Miercoles = "Miercoles",
  Jueves = "Jueves",
  Viernes = "Viernes",
  Sabado = "Sabado",
  Domingo = "Domingo",
}

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
  playingDays: Days[];
  // status: string;
  teamsQuantity: TeamsQuantity;
  matchDuration: number;
  courts: number;
  descrption: string;
  tournamentImg: string;
  category: string;
}
