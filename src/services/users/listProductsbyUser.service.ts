import AppDataSource from "../../data-source";
import { User } from "../../entities/users.entity";
import {
  productsbyUser,
  userSchema,
} from "../../serializer/productsbyUser.serializer";

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

  /* const userProducts = await userSchema.validate(user, {
    stripUnknown: true,
  }); */

  return user;
};

export { listProductsbyUserService };
