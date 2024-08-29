// import { axiosInstance } from "../AxiosConfig";
// import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

// export const getTournamentById = async (
//   id: string
// ): Promise<ITournament | null> => {
//   try {
//     const response = await axiosInstance.get(`/tournament/${id}`);
//     console.log(response.data);
//     return response.data; // Asegúrate de que response.data sea del tipo ITournament
//   } catch (error) {
//     console.error("Error fetching tournament by ID:", error);
//     return null;
//   }
// };

import { axiosInstance } from "../AxiosConfig";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

// Función para simular un retraso
const simulateDelay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const getTournamentById = async (
  id: string
): Promise<ITournament | null> => {
  try {
    // Simula un retraso de 3 segundos
    await simulateDelay(3000);

    const response = await axiosInstance.get(`/tournament/${id}`);
    console.log(response.data);

    return response.data; // Asegúrate de que response.data sea del tipo ITournament
  } catch (error) {
    console.error("Error fetching tournament by ID:", error);
    return null;
  }
};
