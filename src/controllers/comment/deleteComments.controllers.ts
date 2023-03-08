import { Request, Response } from "express";
import deleteCommentByIdProductService from "../../services/comment/deleteCommentByIdProduct.service";

const deleteProductByIdController = async (req: Request, res: Response) => {
  const { comment_id } = req.params;
  const userId = req.user.id;

  const result = await deleteCommentByIdProductService(comment_id, userId);
  return res.status(204).send();
};

export { deleteProductByIdController };
