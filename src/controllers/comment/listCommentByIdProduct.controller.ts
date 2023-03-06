import { Request, Response } from "express";
import { listCommentByIdProductService } from "../../services/comment/listCommentByIdProduct.service";


const listCommentByIdProductController = async (req: Request, res: Response) => {
  const { product_id } = req.params;
  const listCommentProduct = await listCommentByIdProductService(product_id);
  return res.status(200).json(listCommentProduct);
};

export { listCommentByIdProductController };

