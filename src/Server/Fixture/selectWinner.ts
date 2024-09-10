import { axiosInstance } from "../AxiosConfig";

export const selectWinner = async (
  matchId: string,
  winnerId: string,
  token: string
) => {
  try {
    console.log(token, "token");
    const response = await axiosInstance.put(
      `/tournamentfixture/matchWinner/${winnerId}`,
      { matchId },
      {
        headers: {
          authorization: `Bearer ${token}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
