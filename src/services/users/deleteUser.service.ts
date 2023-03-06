import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const users = await userRepository.find();

  const user = users.find((user) => user.id === id);

  if (!user) {
    throw new AppError("User not found", 404);
  }

  await userRepository.delete(id);
};

export { deleteUserService };
