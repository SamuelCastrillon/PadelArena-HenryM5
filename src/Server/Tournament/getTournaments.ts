import { axiosInstance } from "../AxiosConfig";

export const getTournaments = async () => {
  try {
    const response = await axiosInstance.get("/tournament");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};