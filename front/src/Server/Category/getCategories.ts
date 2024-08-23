import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/category`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
