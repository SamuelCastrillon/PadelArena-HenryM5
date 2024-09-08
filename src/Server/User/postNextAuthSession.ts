import { axiosInstance } from "../AxiosConfig";
import { IUserGoogle } from "@/interfaces/RequestInterfaces";
import Swal from "sweetalert2";

export const postNextAuthSession = async (user: IUserGoogle) => {
  try {
    const response = await axiosInstance.post("/auth/google-sign", user);

    return response.data;
  } catch (error) {
    Swal.fire({
      title: "Error al realizar la sesión del usuario.",
      text: "Por favor, intente nuevamente más tarde.",
      icon: "error",
      width: 400,
      padding: "3em",
    });
    console.log(error);
    throw error;
  }
};
