import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";

const listUserService = (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = userRepository.findOne({
    where: {
      id,
    },
    relations: {
      products: true,
      address: true,
    },
  });

  return user;
};

export { listUserService };
