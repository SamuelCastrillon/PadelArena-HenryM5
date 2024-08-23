import { ICreateTournamentReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function HandlerNewTournament(data: ICreateTournamentReq) {
  try {
    const response = await axiosInstance.post("/tournament/new", data);
    console.log(response);

    if (response.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return error;
  }
}

export default HandlerNewTournament;
