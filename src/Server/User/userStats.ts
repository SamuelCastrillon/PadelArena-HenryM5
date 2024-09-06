import { axiosInstance } from "../AxiosConfig";

export const getUserStats = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/player-stadistics/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
