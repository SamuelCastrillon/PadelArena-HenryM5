import { axiosInstance } from "../AxiosConfig";

export const getUserById = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
