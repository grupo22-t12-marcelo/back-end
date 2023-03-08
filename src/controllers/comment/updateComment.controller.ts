import { Request, Response } from "express";
import { updateCommentService } from "../../services/comment/updateComment.service";

const updateCommentController = async (req: Request, res: Response) => {
  const { comment, id } = req.body;
  const user_id = req.user.id;
  const { product_id } = req.params;

  const updateComment = await updateCommentService(
    comment,
    id,
    user_id,
    product_id
  );

  console.log(updateComment);

  return res.status(200).json({ message: "Comment updated!" });
};

export { updateCommentController };
