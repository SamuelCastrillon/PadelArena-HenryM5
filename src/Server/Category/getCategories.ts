import { axiosInstance } from "../AxiosConfig";
export const getCategories = async () => {
  try {
    const response = await axiosInstance.get("/category");
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
