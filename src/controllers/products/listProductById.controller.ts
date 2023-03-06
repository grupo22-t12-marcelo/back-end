import { Request, Response } from "express";

import { listProductByIdService } from "../../services/products/listProductById.service";

const listProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const product = await listProductByIdService(id);
  return res.status(200).json(product);
};

export { listProductByIdController };
