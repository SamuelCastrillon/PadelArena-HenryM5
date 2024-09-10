import { ICreateTournamentReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";
import { isAxiosError } from "axios";
import Swal from "sweetalert2";

async function HandlerNewTournament(data: ICreateTournamentReq, token: string) {
  try {
    const response = await axiosInstance.post("/tournament/new", data, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      Swal.fire({
        title: `${error.response?.data.message}`,
        width: 400,
        padding: "3em",
      });
    }
    return error;
  }
}

export default HandlerNewTournament;
