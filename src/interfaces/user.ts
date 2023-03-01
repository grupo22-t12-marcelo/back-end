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

export interface IUserLogin {
  username: string;
  password: string;
}
