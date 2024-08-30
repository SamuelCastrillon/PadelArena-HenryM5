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

export const updateUserCategory = async (userId: string, category: string) => {
  try {
    const response = await axiosInstance.put(
      `/users/updateCategory/${userId}`,
      { category }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error en la solicitud de actualización de categoría:",
      error
    );
    throw error;
  }
};

export const getUsersId = async (userId: string) => {
  try {
    const response = await axiosInstance.get(`/users/${userId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
