// tournamentData.ts

export interface Tournament {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  startDate: string;
  endDate: string;
  location: string;
  status: "upcoming" | "inProgress" | "finished";
}

export const upcomingTournaments: Tournament[] = [
  {
    id: "1",
    name: "Copa Pádel Madrid",
    description: "El torneo más esperado del año en Madrid.",
    imageUrl:
      "https://images.unsplash.com/photo-1651140753772-c12fdcd7077d?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFkZWwlMjB0ZW5pc3xlbnwwfHwwfHx8MA%3D%3D",
    startDate: "2024-09-10",
    endDate: "2024-09-12",
    location: "Madrid, España",
    status: "upcoming",
  },
  {
    id: "2",
    name: "Open de Barcelona",
    description: "Un evento internacional que reúne a los mejores jugadores.",
    imageUrl: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    location: "Barcelona, España",
    status: "upcoming",
  },
  {
    id: "3",
    name: "Open de Barcelona",
    description: "Un evento internacional que reúne a los mejores jugadores.",
    imageUrl: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    location: "Barcelona, España",
    status: "upcoming",
  },
  {
    id: "4",
    name: "Open de Barcelona",
    description: "Un evento internacional que reúne a los mejores jugadores.",
    imageUrl: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    location: "Barcelona, España",
    status: "upcoming",
  },
  {
    id: "5",
    name: "Open de Barcelona",
    description: "Un evento internacional que reúne a los mejores jugadores.",
    imageUrl: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    location: "Barcelona, España",
    status: "upcoming",
  },
  {
    id: "6",
    name: "Open de Barcelona",
    description: "Un evento internacional que reúne a los mejores jugadores.",
    imageUrl: "https://www.2playbook.com/uploads/s1/83/44/5/wpt.jpeg",
    startDate: "2024-09-20",
    endDate: "2024-09-22",
    location: "Barcelona, España",
    status: "upcoming",
  },
  // Agrega más torneos aquí
];

export const inProgressTournaments: Tournament[] = [
  {
    id: "7",
    name: "Pádel Masters Sevilla",
    description: "Competencia intensa en la capital andaluza.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-08-15",
    endDate: "2024-08-17",
    location: "Sevilla, España",
    status: "inProgress",
  },
  {
    id: "8",
    name: "Torneo Internacional de Valencia",
    description: "Los mejores equipos del mundo compiten en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-08-18",
    endDate: "2024-08-20",
    location: "Valencia, España",
    status: "inProgress",
  },
  {
    id: "9",
    name: "Torneo Internacional de Valencia",
    description: "Los mejores equipos del mundo compiten en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-08-18",
    endDate: "2024-08-20",
    location: "Valencia, España",
    status: "inProgress",
  },
  {
    id: "10",
    name: "Torneo Internacional de Valencia",
    description: "Los mejores equipos del mundo compiten en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-08-18",
    endDate: "2024-08-20",
    location: "Valencia, España",
    status: "inProgress",
  },
  {
    id: "11",
    name: "Torneo Internacional de Valencia",
    description: "Los mejores equipos del mundo compiten en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-08-18",
    endDate: "2024-08-20",
    location: "Valencia, España",
    status: "inProgress",
  },
  {
    id: "12",
    name: "Torneo Internacional de Valencia",
    description: "Los mejores equipos del mundo compiten en Valencia.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-08-18",
    endDate: "2024-08-20",
    location: "Valencia, España",
    status: "inProgress",
  },
  // Agrega más torneos aquí
];

export const finishedTournaments: Tournament[] = [
  {
    id: "13",
    name: "Campeonato Mundial de Pádel",
    description: "El evento culminante del circuito mundial.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-07-05",
    endDate: "2024-07-07",
    location: "Buenos Aires, Argentina",
    status: "finished",
  },
  {
    id: "14",
    name: "Gran Slam de Lisboa",
    description: "Torneo histórico con finales emocionantes.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-07-15",
    endDate: "2024-07-17",
    location: "Lisboa, Portugal",
    status: "finished",
  },
  {
    id: "15",
    name: "Gran Slam de Lisboa",
    description: "Torneo histórico con finales emocionantes.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-07-15",
    endDate: "2024-07-17",
    location: "Lisboa, Portugal",
    status: "finished",
  },
  {
    id: "16",
    name: "Gran Slam de Lisboa",
    description: "Torneo histórico con finales emocionantes.",
    imageUrl:
      "https://img.rtve.es/imagenes/fernando-belasteguin-icono-padel-mundial/1616756538075.jpg",
    startDate: "2024-07-15",
    endDate: "2024-07-17",
    location: "Lisboa, Portugal",
    status: "finished",
  },

  // Agrega más torneos aquí
];
