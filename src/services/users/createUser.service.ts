import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

import { hash } from "bcryptjs";
import { AppError } from "../../errors/appError";
import { IUserRequest } from "../../interfaces/user";
import { Address } from "../../entities/address.entity";

const createUserService = async (data: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);
  const addressRepository = AppDataSource.getRepository(Address);

  const { address } = data;

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === data.email);
  const cpfAlreadyExists = users.find((user) => user.cpf === data.cpf);

  if (emailAlreadyExists || cpfAlreadyExists) {
    throw new AppError("Email or CPF already exists");
  }

  data.password = await hash(data.password, 10);

  const addressSave = addressRepository.create(address);
  await addressRepository.save(addressSave);

  const user = userRepository.create({
    ...data,
    address: addressSave,
  });

  await userRepository.save(user);

  return user;
};

export { createUserService };

