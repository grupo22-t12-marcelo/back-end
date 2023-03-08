import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const deleteCommentByIdProductService = async (id: string, userId: string) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const commentUnico = await commentRepository.findOneBy({
    id: id
})

  if(!commentUnico) {
    throw new AppError('Comment not found', 404)
  }
  const userAction = await userRepository.findOneBy({id:userId})
  if(!userAction){
    throw new AppError('User not found', 404)
  }

  const commentUser = userAction.comments.find(comment=>comment.id === id)
  if(!commentUser){
    throw new AppError('Comment does not belong to the user', 404)
  }    

  await commentRepository.delete(commentUser.id)

  return 'OK'
  
};
export default deleteCommentByIdProductService
