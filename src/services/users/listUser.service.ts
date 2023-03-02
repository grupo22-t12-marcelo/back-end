import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";

const listUserService = (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
};

export { listUserService };
