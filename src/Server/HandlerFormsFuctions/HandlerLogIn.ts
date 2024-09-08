import { IUserLoginReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";
import Swal from "sweetalert2";
import Link from "next/link";

async function HandlerLogIn(data: IUserLoginReq) {
  try {
    const response = await axiosInstance.post("/auth/local-signin", data);

    if (response.status === 200) {
      Swal.fire({
        title: "Te has logueado con éxito.",
        width: 400,
        padding: "3em",
      });
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    Swal.fire({
      title: "No eres un usuario registrado. Por favor completa el registro.",
      width: 400,
      padding: "3em",
    });
    console.error(error);
    return error;
  }
}

export default HandlerLogIn;
