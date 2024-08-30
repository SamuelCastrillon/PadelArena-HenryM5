import { axiosInstance } from "../AxiosConfig";
import { ITournament } from "@/interfaces/ComponentsInterfaces/Tournament";

export const getTournamentById = async (
  id: string
): Promise<ITournament | null> => {
  try {
    const response = await axiosInstance.get(`/tournament/${id}`);
    console.log(response.data);
    return response.data; // Asegúrate de que response.data sea del tipo ITournament
  } catch (error) {
    console.error("Error fetching tournament by ID:", error);
    return null;
  }
};

export const getTournamentByCategory = async (
  category: string
): Promise<ITournament | null> => {
  try {
    const response = await axiosInstance.get(
      `/tournament/category/${category}`
    );
    console.log(response.data);
    return response.data; // Asegúrate de que response.data sea del tipo ITournament
  } catch (error) {
    console.error("Error fetching tournament by Category:", error);
    return null;
  }
};
