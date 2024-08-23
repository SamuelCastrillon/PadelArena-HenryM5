import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";
// Asegúrate de que esta es la ruta correcta

export const tournamentsHelper: ITournament[] = [
  {
    id: "1",
    name: "Torneo de Primavera",
    startDate: "2024-09-01",
    endDate: "2024-09-05",
    startingTime: "10:00 AM",
    finishingTime: "04:00 PM",
    playingDays: ["2024-09-01", "2024-09-03", "2024-09-05"],
    description: "Torneo de pádel para la categoría de segunda.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: [
      "https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2023/8/10/wayekhjulogbkd3ctt3p/alejandro-galan-padel-spain",
    ],
    courtsAvailable: 4,
    inscripciones: "abierta",
    status: "upcoming",
    category: { id: "1", name: "Segunda", description: "Categoría segunda" },
    genero: "masculino",
    teamsQuantity: 8,
    matchDuration: 90,
    fixture: [
      {
        id: "1",
        stage: "Fase de Grupos",
        date: "2024-09-01",
        time: "10:00 AM",
        matchId: 1,
        tournamentId: 1,
      },
    ],
    team: [
      {
        id: "1",
        name: "Equipo A",
        category: {
          id: "1",
          name: "Segunda",
          description: "Categoría segunda",
        },
        users: [
          {
            id: "1",
            name: "Juan",
            lastName: "Pérez",
            email: "juan.perez@example.com",
            password: "password123",
            phone: "123456789",
            country: "Argentina",
            city: "Buenos Aires",
            address: "Av. Siempre Viva 742",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
          {
            id: "2",
            name: "Ana",
            lastName: "Gómez",
            email: "ana.gomez@example.com",
            password: "password123",
            phone: "987654321",
            country: "Argentina",
            city: "CABA",
            address: "Calle Falsa 123",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "1",
          name: "Torneo de Primavera",
          startDate: "2024-09-01",
          endDate: "2024-09-05",
          startingTime: "10:00 AM",
          finishingTime: "04:00 PM",
          playingDays: ["2024-09-01", "2024-09-03", "2024-09-05"],
          description: "Torneo de pádel para la categoría de segunda.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 4,
          inscripciones: "abierta",
          status: "upcoming",
          category: {
            id: "1",
            name: "Segunda",
            description: "Categoría segunda",
          },
          genero: "masculino",
          teamsQuantity: 8,
          matchDuration: 90,
          fixture: [],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  {
    id: "2",
    name: "Copa Verano",
    startDate: "2024-07-15",
    endDate: "2024-07-20",
    startingTime: "09:00 AM",
    finishingTime: "03:00 PM",
    playingDays: ["2024-07-15", "2024-07-17", "2024-07-20"],
    description: "Torneo de pádel para la categoría de cuarta.",
    tournamentFlyer: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    gallery: [
      "https://cache.tradeinn.com/web/finders/padelFinder-detalle.webp",
    ],
    courtsAvailable: 3,
    inscripciones: "cerrada",
    status: "finished",
    category: { id: "2", name: "Cuarta", description: "Categoría cuarta" },
    genero: "femenino",
    teamsQuantity: 6,
    matchDuration: 75,
    fixture: [
      {
        id: "2",
        stage: "Fase de Grupos",
        date: "2024-07-15",
        time: "09:00 AM",
        matchId: 2,
        tournamentId: 2,
      },
    ],
    team: [
      {
        id: "2",
        name: "Equipo B",
        category: { id: "2", name: "Cuarta", description: "Categoría cuarta" },
        users: [
          {
            id: "3",
            name: "Luis",
            lastName: "Martínez",
            email: "luis.martinez@example.com",
            password: "password123",
            phone: "321654987",
            country: "Argentina",
            city: "Córdoba",
            address: "Calle Verdadera 456",
            profileImg: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          },
        ],
        tournament: {
          id: "2",
          name: "Copa Verano",
          startDate: "2024-07-15",
          endDate: "2024-07-20",
          startingTime: "09:00 AM",
          finishingTime: "03:00 PM",
          playingDays: ["2024-07-15", "2024-07-17", "2024-07-20"],
          description: "Torneo de pádel para la categoría de cuarta.",
          tournamentFlyer:
            "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
          courtsAvailable: 3,
          inscripciones: "cerrada",
          status: "finished",
          category: {
            id: "2",
            name: "Cuarta",
            description: "Categoría cuarta",
          },
          genero: "femenino",
          teamsQuantity: 6,
          matchDuration: 75,
          fixture: [
            {
              id: "2",
              stage: "Fase de Grupos",
              date: "2024-07-15",
              time: "09:00 AM",
              matchId: 2,
              tournamentId: 2,
            },
          ],
        },
        matches: [],
      },
    ],
    matches: [],
  },
  // Agrega más torneos según sea necesario...
];
