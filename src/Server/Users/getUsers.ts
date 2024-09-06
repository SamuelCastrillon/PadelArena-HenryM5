import { axiosInstance } from "../AxiosConfig";

export const getAllUsers = async () => {
  try {
    const response = await axiosInstance.get("/users");

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

    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUsersByCategory = async (category: string) => {
  try {
    const response = await axiosInstance.get(`/users/category/${category}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching users by category:", error);
    return null;
  }
};
