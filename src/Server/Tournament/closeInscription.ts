import { axiosInstance } from "../AxiosConfig";

export const closeInscription = async (tournamentId: string) => {
  try {
    const response = await axiosInstance.put(
      `/tournament/closeInscriptions/${tournamentId}`
    );

    return response.data;
  } catch (error) {
    console.error("Error al cerrar inscripción:", error);
    throw error;
  }
};
