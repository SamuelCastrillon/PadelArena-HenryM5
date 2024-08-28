import { axiosInstance } from "../AxiosConfig";

export interface IUpdateUser {
  address: string;
  city: string;
  phone: string;
  country: string;
}

export const updateUserProfile = async (
  userId: string,
  updateData: IUpdateUser
) => {
  try {
    const response = await axiosInstance.put(
      `/users/${userId}/updateProfile`,
      updateData
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error; // Puedes lanzar el error para manejarlo en el componente que llama a esta función
  }
};
