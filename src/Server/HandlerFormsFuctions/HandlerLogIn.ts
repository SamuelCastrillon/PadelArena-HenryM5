import { IUserLoginReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

async function HandlerLogIn(data: IUserLoginReq) {
  try {
    const response = await axiosInstance.post("/auth/local-signin", data);

    if (response.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    console.error(error);
    return error;
  }
}

export default HandlerLogIn;
