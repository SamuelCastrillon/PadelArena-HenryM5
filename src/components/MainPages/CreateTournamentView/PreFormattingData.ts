import {
  ICreateTournamentFormData,
  ICreateTournamentReq,
} from "@/interfaces/RequestInterfaces";

export function preFormattingData(
  data: ICreateTournamentFormData
): ICreateTournamentReq {
  const { Lunes, Martes, Miercoles, Jueves, Viernes, Sabado, Domingo } = data;
  const playingDaysSelected = [
    Lunes,
    Martes,
    Miercoles,
    Jueves,
    Viernes,
    Sabado,
    Domingo,
  ];

  const daysToString = playingDaysSelected.map((day) => {
    let daySelect = undefined;

    if (day && day[0] === "on") {
      switch (day) {
        case Lunes:
          daySelect = "Lunes";
          break;
        case Martes:
          daySelect = "Martes";
          break;
        case Miercoles:
          daySelect = "Miercoles";
          break;
        case Jueves:
          daySelect = "Jueves";
          break;
        case Viernes:
          daySelect = "Viernes";
          break;
        case Sabado:
          daySelect = "Sabado";
          break;
        case Domingo:
          daySelect = "Domingo";
          break;
      }
    }
    if (daySelect) {
      return daySelect;
    }
  });

  const daysToSend = daysToString.filter((day) => day !== undefined);

  const dataToSend: ICreateTournamentReq = {
    name: data.name,
    startDate: data.startDate,
    startTime: data.startTime,
    endTime: data.endTime,
    playingDays: daysToSend ? daysToSend : [],
    teamsQuantity: Number(data.teamsQuantity),
    matchDuration: data.matchDuration,
    courts: data.courts,
    description: data.description,
    tournamentFlyer: data.tournamentFlyer,
    category: data.category,
    price: data.price,
  };

  return dataToSend;
}
