import { Request, Response } from "express";
import { listAllProductsService } from "../../services/products/listAllProducts.service";

const listAllProductsController = async (req: Request, res: Response) => {
  const productsList = await listAllProductsService();

  return res.status(200).json(productsList);
};

export { listAllProductsController };
