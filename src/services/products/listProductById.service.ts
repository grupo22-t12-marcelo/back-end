import AppDataSource from "../../data-source";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";
import { productIDReturned } from "../../serializer/productbyId.serializer";

const listProductByIdService = async (id: string) => {
  const productRepository = AppDataSource.getRepository(Product);

  if (!id) {
    throw new AppError("ID required", 400);
  }

  const product = await productRepository.findOne({
    where: {
      id,
    },
    relations: {
      imagesGallery: true,
      user: true,
    },
  });

  if (!product) {
    throw new AppError("Product not found", 400);
  }

  const newListProduct = await productIDReturned.validate(product, {
    stripUnknown: true,
  });

  return newListProduct;
};

export { listProductByIdService };
