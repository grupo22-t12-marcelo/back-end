import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { Product } from "../../entities/product.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const updateCommentService = async (
  newComment: string,
  id: string,
  user_id: string,
  product_id: string
) => {
  const productRepository = AppDataSource.getRepository(Product);
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const product = await productRepository.findOneBy({
    id:product_id
  });

  if (!product) {
    throw new AppError("Product not found", 404);
  }

  const userAction = await userRepository.findOne({
    where: {
      id:user_id,
    },
    relations: {
      comments: true,
    },
  });

  console.log(userAction)
  if(!userAction){
    throw new AppError('User not found', 404)
  }

  const commentUser = userAction.comments.find(comment=>comment.id === id)
  if(!commentUser){
    throw new AppError('Comment does not belong to the user', 404)
  }

  const comment = product.comments.find((comment) => comment.id == id)
  
    await commentRepository.update(comment!.id, {
        comment:newComment,
        updatedAt: new Date()
    });

};

export { updateCommentService };

