import { axiosInstance } from "../AxiosConfig";

export const selectWinner = async (matchId: string, winnerId: string) => {
  console.log("aqui el winnerid", winnerId);
  try {
    const response = await axiosInstance.put(
      `/tournamentfixture/matchWinner/${winnerId}`,
      { matchId }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
