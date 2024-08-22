import { axiosInstance } from "../AxiosConfig";

interface IUserRegisterReq {
  name: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirm: string;
  country: string;
  city: string;
  phone: string;
  address: string;
}

function HandlerRegister(data: IUserRegisterReq) {
  const response = axiosInstance.post("/auth/signup", data);
  response.then((res) => {
    return res.data;
  });
  response.catch((err) => {
    return err.response.data;
  });
}

export default HandlerRegister;
