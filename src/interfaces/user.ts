export interface IUserRequest {
  name: string;
  email: string;
  cpf: string;
  phone: string;
  birthdate: string;
  description: string;
  type_account: string;
  password: string;
}

export interface IUserLogin {
  username: string;
  password: string;
}
