import { IProductRequest } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";

const createProductService = async (data: IProductRequest, id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id,
  });

  const product = productRepository.create({
    ...data,
    user: user,
  });

  await productRepository.save(product);

  return product;
};
export { createProductService };
