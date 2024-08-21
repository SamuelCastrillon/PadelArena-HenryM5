// tournamentData.ts

import { ITournament } from "@/interfaces/Tournament";

// tournamentData.ts

export interface Tournament {
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
}

export const upcomingTournaments: Tournament[] = [
  {
    id: "1",
    name: "Copa Pádel Madrid",
    startDate: "2024-09-10",
    endDate: "2024-09-12",
    startingTime: "10:00",
    finishingTime: "18:00",
    playingDays: ["2024-09-10", "2024-09-11", "2024-09-12"],
    description: "El torneo más esperado del año en Madrid.",
    imageUrl:
      "https://images.unsplash.com/photo-1651140753772-c12fdcd7077d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFkZWwlMjB0ZW5pc3xlbnwwfHwwfHx8MA%3D%3D",
    courtsAvailable: 10,
    status: "upcoming",
    categoria: "quinta",
    genero: "femenino",
    inscripciones: "abierta",
  },
  {
    id: "2",
    name: "Open de Barcelona",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    startingTime: "09:00",
    finishingTime: "18:00",
    playingDays: ["2024-09-20", "2024-09-21", "2024-09-22"],
    description: "Un evento internacional que reúne a los mejores jugadores.",
    imageUrl: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    courtsAvailable: 12,
    status: "upcoming",
    categoria: "quinta",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "3",
    name: "Torneo de Verano en Valencia",
    startDate: "2024-10-01",
    endDate: "2024-10-05",
    startingTime: "08:00",
    finishingTime: "20:00",
    playingDays: [
      "2024-10-01",
      "2024-10-02",
      "2024-10-03",
      "2024-10-04",
      "2024-10-05",
    ],
    description: "Un torneo de pádel con un ambiente veraniego en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 8,
    status: "upcoming",
    categoria: "cuarta",
    genero: "femenino",
    inscripciones: "abierta",
  },
  {
    id: "4",
    name: "Campeonato de Otoño en Madrid",
    startDate: "2024-11-10",
    endDate: "2024-11-12",
    startingTime: "09:00",
    finishingTime: "18:00",
    playingDays: ["2024-11-10", "2024-11-11", "2024-11-12"],
    description: "Un campeonato que celebra la temporada de otoño en Madrid.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 10,
    status: "upcoming",
    categoria: "tercera",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "5",
    name: "Torneo Internacional de Navidad",
    startDate: "2024-12-20",
    endDate: "2024-12-22",
    startingTime: "10:00",
    finishingTime: "17:00",
    playingDays: ["2024-12-20", "2024-12-21", "2024-12-22"],
    description: "Un torneo especial para celebrar la Navidad.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 6,
    status: "upcoming",
    categoria: "sexta",
    genero: "femenino",
    inscripciones: "abierta",
  },
  // ... puedes añadir más torneos aquí
];

export const inProgressTournaments: Tournament[] = [
  {
    id: "7",
    name: "Pádel Masters Sevilla",
    startDate: "2024-08-15",
    endDate: "2024-08-17",
    startingTime: "09:00",
    finishingTime: "20:00",
    playingDays: ["2024-08-15", "2024-08-16", "2024-08-17"],
    description: "Competencia intensa en la capital andaluza.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 8,
    status: "inProgress",
    categoria: "primera",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "8",
    name: "Torneo Internacional de Valencia",
    startDate: "2024-08-18",
    endDate: "2024-08-20",
    startingTime: "09:00",
    finishingTime: "18:00",
    playingDays: ["2024-08-18", "2024-08-19", "2024-08-20"],
    description: "Los mejores equipos del mundo compiten en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 10,
    status: "inProgress",
    categoria: "primera",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "9",
    name: "Torneo de Primavera en Murcia",
    startDate: "2024-08-25",
    endDate: "2024-08-30",
    startingTime: "08:00",
    finishingTime: "19:00",
    playingDays: [
      "2024-08-25",
      "2024-08-26",
      "2024-08-27",
      "2024-08-28",
      "2024-08-29",
      "2024-08-30",
    ],
    description: "Un torneo en Murcia para disfrutar del fin de la primavera.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 12,
    status: "inProgress",
    categoria: "cuarta",
    genero: "femenino",
    inscripciones: "abierta",
  },
  {
    id: "10",
    name: "Torneo de Verano en Málaga",
    startDate: "2024-08-15",
    endDate: "2024-08-25",
    startingTime: "10:00",
    finishingTime: "18:00",
    playingDays: [
      "2024-08-15",
      "2024-08-16",
      "2024-08-17",
      "2024-08-18",
      "2024-08-19",
      "2024-08-20",
      "2024-08-21",
      "2024-08-22",
      "2024-08-23",
      "2024-08-24",
      "2024-08-25",
    ],
    description: "Disfruta de un torneo de verano en la costa de Málaga.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 14,
    status: "inProgress",
    categoria: "sexta",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "11",
    name: "Torneo de Pádel en Santander",
    startDate: "2024-08-20",
    endDate: "2024-08-25",
    startingTime: "11:00",
    finishingTime: "19:00",
    playingDays: [
      "2024-08-20",
      "2024-08-21",
      "2024-08-22",
      "2024-08-23",
      "2024-08-24",
      "2024-08-25",
    ],
    description: "Un torneo en la hermosa ciudad de Santander.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 9,
    status: "inProgress",
    categoria: "tercera",
    genero: "femenino",
    inscripciones: "abierta",
  },
  // ... puedes añadir más torneos aquí
];

export const finishedTournaments: Tournament[] = [
  {
    id: "13",
    name: "Campeonato Mundial de Pádel",
    startDate: "2024-07-05",
    endDate: "2024-07-07",
    startingTime: "11:00",
    finishingTime: "19:00",
    playingDays: ["2024-07-05", "2024-07-06", "2024-07-07"],
    description: "El evento culminante del circuito mundial.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 12,
    status: "finished",
    categoria: "primera",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "14",
    name: "Torneo de Invierno en Barcelona",
    startDate: "2024-01-10",
    endDate: "2024-01-15",
    startingTime: "10:00",
    finishingTime: "16:00",
    playingDays: [
      "2024-01-10",
      "2024-01-11",
      "2024-01-12",
      "2024-01-13",
      "2024-01-14",
      "2024-01-15",
    ],
    description: "Un torneo de pádel que marca el inicio del año en Barcelona.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 8,
    status: "finished",
    categoria: "cuarta",
    genero: "femenino",
    inscripciones: "abierta",
  },
  {
    id: "15",
    name: "Torneo de Pádel en Tenerife",
    startDate: "2024-06-01",
    endDate: "2024-06-05",
    startingTime: "09:00",
    finishingTime: "17:00",
    playingDays: [
      "2024-06-01",
      "2024-06-02",
      "2024-06-03",
      "2024-06-04",
      "2024-06-05",
    ],
    description: "Un torneo en la hermosa isla de Tenerife.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 10,
    status: "finished",
    categoria: "tercera",
    genero: "masculino",
    inscripciones: "abierta",
  },
  {
    id: "16",
    name: "Torneo de Verano en Alicante",
    startDate: "2024-07-10",
    endDate: "2024-07-15",
    startingTime: "10:00",
    finishingTime: "20:00",
    playingDays: [
      "2024-07-10",
      "2024-07-11",
      "2024-07-12",
      "2024-07-13",
      "2024-07-14",
      "2024-07-15",
    ],
    description: "Un torneo de pádel para disfrutar de las playas de Alicante.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 12,
    status: "finished",
    categoria: "primera",
    genero: "femenino",
    inscripciones: "abierta",
  },
  {
    id: "17",
    name: "Torneo de Otoño en Zaragoza",
    startDate: "2024-10-10",
    endDate: "2024-10-15",
    startingTime: "11:00",
    finishingTime: "18:00",
    playingDays: [
      "2024-10-10",
      "2024-10-11",
      "2024-10-12",
      "2024-10-13",
      "2024-10-14",
      "2024-10-15",
    ],
    description: "Celebración del otoño con un torneo en Zaragoza.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    courtsAvailable: 8,
    status: "finished",
    categoria: "segunda",
    genero: "masculino",
    inscripciones: "abierta",
  },
  // ... puedes añadir más torneos aquí
];
