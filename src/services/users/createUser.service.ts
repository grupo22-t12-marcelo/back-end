import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";
import { IUserRequest } from "../../interfaces/product";
import { AppError } from "../../errors/appError";
import { hash } from "bcryptjs";

const createUserService = async (data: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === data.email);
  const cpfAlreadyExists = users.find((user) => user.cpf === data.cpf);

  if (emailAlreadyExists || cpfAlreadyExists) {
    throw new AppError("Email or CPF already exists");
  }

  data.password = await hash(data.password, 10);

  const user = userRepository.create(data);

  await userRepository.save(user);

  return user;
};

export { createUserService };
