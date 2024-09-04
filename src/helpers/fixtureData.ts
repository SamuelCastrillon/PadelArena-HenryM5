import { IFixture } from "@/interfaces/ComponentsInterfaces/Fixture";

export const fixture: IFixture = {
  id: "fixture-1", // Asegúrate de que 'id' esté presente y sea único
  round: [
    {
      id: "round-1",
      stage: "octavos",
      matches: [
        {
          id: "match-1-1",
          date: "Lunes",
          time: "10:00",
          teamWinner: "team-1",
          teams: [
            { id: "team-1", name: "Team Alpha", order: 0, ableForPlay: true },
            { id: "team-2", name: "Team Beta", order: 1, ableForPlay: false },
          ],
        },
        {
          id: "match-1-2",
          date: "Lunes",
          time: "12:00",
          teamWinner: "team-3",
          teams: [
            { id: "team-3", name: "Team Gamma", order: 2, ableForPlay: true },
            { id: "team-4", name: "Team Delta", order: 3, ableForPlay: false },
          ],
        },
        {
          id: "match-1-3",
          date: "Martes",
          time: "10:00",
          teamWinner: "team-5",
          teams: [
            { id: "team-5", name: "Team Epsilon", order: 4, ableForPlay: true },
            { id: "team-6", name: "Team Zeta", order: 5, ableForPlay: true },
          ],
        },
        {
          id: "match-1-4",
          date: "Martes",
          time: "12:00",
          teamWinner: "team-7",
          teams: [
            { id: "team-7", name: "Team Eta", order: 6, ableForPlay: true },
            { id: "team-8", name: "Team Theta", order: 7, ableForPlay: true },
          ],
        },
        // Otros partidos de octavos...
      ],
    },
    {
      id: "round-2",
      stage: "cuartos",
      matches: [
        {
          id: "match-2-1",
          date: "Miércoles",
          time: "10:00",
          teamWinner: "team-1",
          teams: [
            { id: "team-1", name: "Team Alpha", order: 0, ableForPlay: true },
            { id: "team-3", name: "Team Gamma", order: 2, ableForPlay: true },
          ],
        },
        {
          id: "match-2-2",
          date: "Miércoles",
          time: "12:00",
          teamWinner: "team-5",
          teams: [
            { id: "team-5", name: "Team Epsilon", order: 4, ableForPlay: true },
            { id: "team-7", name: "Team Eta", order: 6, ableForPlay: true },
          ],
        },
        // Otros partidos de cuartos...
      ],
    },
    {
      id: "round-3",
      stage: "semifinal",
      matches: [
        {
          id: "match-3-1",
          date: "Viernes",
          time: "10:00",
          teamWinner: "team-1",
          teams: [
            { id: "team-1", name: "Team Alpha", order: 0, ableForPlay: true },
            { id: "team-5", name: "Team Epsilon", order: 4, ableForPlay: true },
          ],
        },
        {
          id: "match-3-2",
          date: "Viernes",
          time: "12:00",
          teamWinner: "team-7",
          teams: [
            { id: "team-7", name: "Team Eta", order: 6, ableForPlay: true },
            { id: "team-3", name: "Team Gamma", order: 2, ableForPlay: true },
          ],
        },
        // Otros partidos de semifinal...
      ],
    },
    {
      id: "round-4",
      stage: "final",
      matches: [
        {
          id: "match-4-1",
          date: "Domingo",
          time: "10:00",
          teamWinner: "team-1",
          teams: [
            { id: "team-1", name: "Team Alpha", order: 0, ableForPlay: true },
            { id: "team-7", name: "Team Eta", order: 6, ableForPlay: true },
          ],
        },
        // Agrega más partidos de final si es necesario
      ],
    },
  ],
};
