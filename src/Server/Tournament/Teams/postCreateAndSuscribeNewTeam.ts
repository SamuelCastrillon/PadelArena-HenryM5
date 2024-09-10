import { IPostNewTeam } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "@/Server/AxiosConfig";
import { isAxiosError } from "axios";
import Swal from "sweetalert2";

export async function postCreateAndSuscribeNewTeam(
  tournamentId: string,
  teamPostData: IPostNewTeam,
  token: string
) {
  const URL_POST = `/tournament-team/${tournamentId}`;
  const BODY = teamPostData;

  console.log(URL_POST, BODY);

  try {
    const response = await axiosInstance.post(
      `/tournament-team/${tournamentId}`,
      teamPostData,
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);

    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response?.data.message,
      });
    }
    console.error("Error create and suscribe new team in tournament:", error);
  }
}
