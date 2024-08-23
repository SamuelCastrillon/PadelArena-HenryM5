import { axiosInstance } from "../AxiosConfig";

interface IUserLoginReq {
  email: string;
  password: string;
}

function HandlerLogIn(data: IUserLoginReq) {
  const response = axiosInstance.post("/auth/signin", data);
  response.then((res) => {
    console.log(res.data);
    return res.data;
  });
  response.catch((err) => {
    return err.response.data;
  });
}

export default HandlerLogIn;
