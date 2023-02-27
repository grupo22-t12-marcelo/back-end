import { Request, Response } from "express";
import deleteProductService from "../../services/products/deleteProduct.service";

const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteProductService(id);
  return res.status(204).send();
};

export { deleteProductController };
