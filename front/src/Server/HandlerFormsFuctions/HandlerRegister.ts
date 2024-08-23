import { IUserRegisterReq } from "@/interfaces/RequestInterfaces";
import { axiosInstance } from "../AxiosConfig";

function HandlerRegister(data: IUserRegisterReq) {
  const response = axiosInstance.post("/auth/signup", data);
  response.then((res) => {
    console.log(res.data);
    return res.data;
  });
  response.catch((err) => {
    return err.response.data;
  });
}

export default HandlerRegister;
