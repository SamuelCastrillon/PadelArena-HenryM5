import { IPostNewTeam } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "@/Server/AxiosConfig";

export async function postCreateAndSuscribeNewTeam(
  tournamentId: string,
  teamPostData: IPostNewTeam
) {
  const URL_POST = `/tournament-team/${tournamentId}`;
  const BODY = teamPostData;

  console.log(URL_POST, BODY);

  try {
    const response = await axiosInstance.post(
      `/tournament-team/${tournamentId}`,
      teamPostData
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("Error create and suscribe new team in tournament:", error);
  }
}
