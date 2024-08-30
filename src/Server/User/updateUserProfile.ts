import { ICategories } from "@/interfaces/ComponentsInterfaces/TournamentCategorias";
import { axiosInstance } from "../AxiosConfig";

export interface IUpdateUser {
  address: string;
  city: string;
  phone: string;
  country: string;
  category: string;
}

export const updateUserProfile = async (
  userId: string,
  updateData: IUpdateUser
) => {
  try {
    const response = await axiosInstance.put(
      `/users/updateProfile/${userId}`,
      updateData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Puedes lanzar el error para manejarlo en el componente que llama a esta función
  }
};
