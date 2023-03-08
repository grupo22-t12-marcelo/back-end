import AppDataSource from "../../data-source";
import { Comment } from "../../entities/comment.entity";
import { User } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const deleteCommentByIdProductService = async (
  comment_id: string,
  userId: string
) => {
  const commentRepository = AppDataSource.getRepository(Comment);
  const userRepository = AppDataSource.getRepository(User);

  const commentUnico = await commentRepository.findOneBy({
    id: comment_id,
  });

  if (!commentUnico) {
    throw new AppError("Comment not found", 404);
  }
  const userAction = await userRepository.findOne({
    where: {
      id: userId,
    },
    relations: {
      comments: true,
    },
  });

  if (!userAction) {
    throw new AppError("User not found", 404);
  }

  console.log("__________________________");
  console.log(userAction);
  console.log("__________________________");

  const commentUser = userAction.comments.find(
    (comment) => comment.id === comment_id
  );
  if (!commentUser) {
    throw new AppError("Comment does not belong to the user", 404);
  }

  await commentRepository.delete(commentUser.id);

  return "OK";
};
export default deleteCommentByIdProductService;
