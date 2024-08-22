import { IFixture } from "./Fixture";

export interface ITournament {
  id: string;
  name: string;
  startDate: string;
  endDate: string;
  startingTime: string;
  finishingTime: string;
  playingDays: string[];
  description: string;
  imageUrl: string;
  courtsAvailable: number;
  inscripciones: "abierta" | "cerrada";
  status: "upcoming" | "inProgress" | "finished";
  categoria:
    | "primera"
    | "segunda"
    | "tercera"
    | "cuarta"
    | "quinta"
    | "sexta"
    | "septima"
    | "octava";
  genero: "femenino" | "masculino";
  fixture: IFixture[];
}
