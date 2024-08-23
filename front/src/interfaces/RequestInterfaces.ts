export interface IUserLoginReq {
  email: string;
  password: string;
  userExist: IUserLoginRes;
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

export interface IUserLoginRes {
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
