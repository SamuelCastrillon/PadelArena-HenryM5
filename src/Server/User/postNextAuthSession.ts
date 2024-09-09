import { axiosInstance } from "../AxiosConfig";
import { IUserGoogle } from "@/interfaces/RequestInterfaces";
import Swal from "sweetalert2";

export const postNextAuthSession = async (user: IUserGoogle) => {
  try {
    const response = await axiosInstance.post("/auth/google-sign", user);

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
