import { IProduct } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

const createProductService = async (data: IProduct) => {
  const productRepository = AppDataSource.getRepository(Product);

  const product = productRepository.create(data);

  await productRepository.save(product);

  return product;
};
export { createProductService };
