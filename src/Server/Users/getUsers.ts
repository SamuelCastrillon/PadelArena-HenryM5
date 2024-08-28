import { axiosInstance } from "../AxiosConfig";

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
