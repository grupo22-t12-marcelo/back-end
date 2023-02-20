import { IProductRequest } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";

const listAllProductsService = async (): Promise<IProductRequest[]> => {
  const productRepository = AppDataSource.getRepository(Product);
  const productsList = await productRepository.find();

  return productsList;
};
export { listAllProductsService };
