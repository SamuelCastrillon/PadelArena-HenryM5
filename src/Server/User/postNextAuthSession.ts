import { axiosInstance } from "../AxiosConfig";
import { IUserGoogle } from "@/interfaces/RequestInterfaces";

export const postNextAuthSession = async (user: IUserGoogle) => {
  try {
    const response = await axiosInstance.post("/auth/signin", {
      user,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Opcional: lanzar el error para que pueda ser manejado por la función que llama
  }
};
