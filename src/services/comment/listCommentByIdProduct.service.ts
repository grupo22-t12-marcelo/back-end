import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Product } from "../../entities/product.entity";
import { AppError } from "../../errors/appError";
import { listComments } from "../../serializer/commentsProduct.serializer";

const listCommentByIdProductService = async (product_id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const commentRepository = AppDataSource.getRepository(Comment);

  const product = await productRepository.findOne({
    where: { id: product_id },
  });

  const comments = await commentRepository.find({
    relations: {
      user: true,
      product: true,
    },
  });

  if (!product) {
    throw new AppError("Product not found");
  }

  const comment = comments.filter(
    (comment) => comment.product.id == product.id
  );

  const newListProduct = await listComments.validate(comment, {
    stripUnknown: true,
  });

  return newListProduct;
};

export { listCommentByIdProductService };
