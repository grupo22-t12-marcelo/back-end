import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";


const createCommentService = async (data: string, id: string, product_id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id:id
  })

  if(user!){
    throw new AppError("User not found",404);
  }

  const product = await productRepository.findOneBy({
    id:product_id
  })
  
  if(product!){
    throw new AppError("Product not found",404);
  }

  const comment = new Comment()
  comment.user = user
  comment.product = product
  comment.comment = data

  commentRepository.create(comment)
  await commentRepository.save(comment);

  return comment;
};
export { createCommentService };

