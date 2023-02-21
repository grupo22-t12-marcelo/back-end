import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const listProductByIdService = async (id: string): Promise<Product> => {
  const productRepository = AppDataSource.getRepository(Product);

  if (!id) {
    throw new AppError("ID required", 400);
  }

  const product = await productRepository.findOneBy({
    id,
  });

  if (!product) {
    throw new AppError("Product not found", 400);
  }

  return product;
};

export { listProductByIdService };
