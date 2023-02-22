import { Request, Response } from "express";
import { updateProductService } from "../../services/products/updateProduct.service";

const updateProductController = async (req: Request, res: Response) => {
  const product = req.body;
  const { id } = req.params;

  const updateProduct = await updateProductService(product, id);

  return res.status(200).json({ message: "Product updated!" });
};

export { updateProductController };
