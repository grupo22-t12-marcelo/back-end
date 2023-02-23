import { Request, Response } from "express";
import { deleteProductService } from "../../services/products/deleteProduct.service";

const deleteProductController = async (req: Request, res: Response) => {
  const { id } = req.params;
  //const id = req.user.id;
  // await deleteProductService(id);
  return res.status(204).json(id);
};

export { deleteProductController };
