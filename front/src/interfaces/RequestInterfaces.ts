export interface IUserLoginReq {
  email: string;
  password: string;
}

export interface IUserLoginRes {
  message: string;
  token: string;
  userExist: IUserLogin;
}

export interface IUserRegisterReq {
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

export interface IUserLogin {
  id: string;
  name: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
  country: string;
  city: string;
  address: string;
  profileImg: string;
}
