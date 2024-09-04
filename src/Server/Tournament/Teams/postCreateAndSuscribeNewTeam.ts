import { IPostNewTeam } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "@/Server/AxiosConfig";

export async function postCreateAndSuscribeNewTeam(
  tournamentId: string,
  teamPostData: IPostNewTeam
) {
  try {
    const response = await axiosInstance.post(`/tournament-team/${tournamentId}`, teamPostData);
    return response.data;
  } catch (error) {
    console.error("Error create and suscribe new team in tournament:", error);
  }
}
