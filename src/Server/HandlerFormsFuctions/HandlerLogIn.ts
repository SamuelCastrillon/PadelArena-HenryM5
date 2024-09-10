import { IUserLoginReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";
import Swal from "sweetalert2";
import { AxiosError } from "axios";

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
    console.log(error);
    if (error instanceof AxiosError) {
      Swal.fire({
        title: `${error.response?.data.message}`,
        width: 400,
        padding: "3em",
      });
    }
    return error;
  }
}

export default HandlerLogIn;
