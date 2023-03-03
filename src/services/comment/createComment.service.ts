import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";
import { ICommentRequest } from "../../interfaces/comment";


const createCommentService = async (data: ICommentRequest, id: string, product_id: string) => {
  const productRepository = AppDataSource.getRepository(Product);
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({
    id:id
  })

  if(!user){
    throw new AppError("User not found",404);
  }

  const product = await productRepository.findOneBy({
    id:product_id
  })
  
  if(!product){
    throw new AppError("Product not found",404);
  }

  const comments = new Comment()
  comments.user = user;
  comments.product = product;
  comments.comment = data.comment

  commentRepository.create(comments)
  await commentRepository.save(comments);

  return comments;
};
export { createCommentService };

