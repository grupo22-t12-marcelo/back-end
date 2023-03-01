import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import { createCommentService } from "../../services/comment/createComment.service";

const createCommentController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.user.id;
  const product_id = req.params.product_id
  const createdComment = await createCommentService(data, id, product_id);
  return res.status(201).json(instanceToPlain(createdComment));
};

export { createCommentController };

