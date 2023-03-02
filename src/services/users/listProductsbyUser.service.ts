import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";

const listProductsbyUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOne({
    where: {
      id: id,
    },
    relations: {
      products: true,
    },
  });

  return user?.products;
};

export { listProductsbyUserService };
