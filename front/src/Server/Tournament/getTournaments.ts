import axios from "axios";
import { axiosInstance } from "../AxiosConfig";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getTournaments = async () => {
  try {
    const response = await axiosInstance.get("/tournament");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
