export interface IUserLoginReq {
  email: string;
  password: string;
}

export interface IUserLoginRes {
  message: string;
  token: string;
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
