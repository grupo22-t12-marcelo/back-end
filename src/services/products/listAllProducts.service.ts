import { IProductRequest } from "../../interfaces/product";
import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { listProducts } from "../../serializer/productRetorned.serializer";

const listAllProductsService = async () => {
  const productRepository = AppDataSource.getRepository(Product);
  const productsList = await productRepository.find({
    relations: {
      user: true,
    },
  });

  const newListProduct = await listProducts.validate(productsList, {
    stripUnknown: true,
  });

  return newListProduct;
};
export { listAllProductsService };
