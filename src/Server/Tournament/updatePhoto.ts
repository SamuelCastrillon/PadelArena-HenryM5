import { axiosInstance } from "../AxiosConfig";

export const updatePhoto = async (id: string, photo: File) => {
  try {
    const formData = new FormData();
    formData.append("file", photo);

    const response = await axiosInstance.put(
      `/file/update-tournamentFlyer/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          accept: "*/*",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error al actualizar la foto:", error);
    throw error;
  }
};
