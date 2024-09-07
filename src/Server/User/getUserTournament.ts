import { axiosInstance } from "../AxiosConfig";

export const getUserTournament = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/users/tournament/${userId}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
