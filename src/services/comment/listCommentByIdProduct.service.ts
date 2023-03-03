import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";

const listCommentByIdProductService = async (product_id: string): Promise<Comment[]> => {
  const productRepository = AppDataSource.getRepository(Product);

  if (!product_id) {
    throw new AppError("Product id required", 400);
  }

  const product = await productRepository.findOneBy({
    id:product_id,
  });
  if (!product) {
    throw new AppError("Product not found", 400);
  }

  return product.comments;
};

export { listCommentByIdProductService };

