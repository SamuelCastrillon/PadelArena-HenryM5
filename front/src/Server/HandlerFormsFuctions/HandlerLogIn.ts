import { axiosInstance } from "../AxiosConfig";

export interface IUserLoginReq {
  email: string;
  password: string;
}

export interface IUserLoginRes {
  message: string;
  token: string;
}

async function HandlerLogIn(data: IUserLoginReq) {
  try {
    const response = await axiosInstance.post("/auth/signin", data);
    if (response.status === 200) {
      return response.data;
    } else {
      throw response.data;
    }
  } catch (error) {
    return error;
  }
}

export default HandlerLogIn;
