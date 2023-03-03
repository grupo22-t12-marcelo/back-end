import { IProductListAll } from "./product";

export interface IAddressRequest {
  zipCode: string;
  state: string;
  city: string;
  road: string;
  number: string;
  complement: string;
}

export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  type_account: string;
  password: string;
  address: IAddressRequest;
}

export interface IUserListProduct {
  id: string;
  name: string;
  description: string;
  type_account: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}

export interface IAddressUpdate {
  zipCode?: string;
  state?: string;
  city?: string;
  road?: string;
  number?: string;
  complement?: string;
}

export interface IUserUpdateRequest {
  name?: string;
  email?: string;
  cpf?: string;
  phone?: string;
  birthdate?: string;
  description?: string;
  type_account?: string;
  password?: string;
  address: IAddressUpdate;
}
