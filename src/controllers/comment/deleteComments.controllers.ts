import { Request, Response } from "express";
import deleteCommentByIdProductService from "../../services/comment/deleteCommentByIdProduct.service";

const deleteProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.body;
  const userId = req.user.id;

  const result = await deleteCommentByIdProductService(id, userId);
  return res.status(204).send();
};

export { deleteProductByIdController };

