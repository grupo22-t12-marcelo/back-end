import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { handleErrorMiddleware } from "../../middlewares/handleError.middleware";
import { listProductByIdService } from "../../services/products/listProductById.service";

const listProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const product = await listProductByIdService(id);
    return res.status(200).json(product);
  } catch (error) {
    if (error instanceof AppError) {
      handleErrorMiddleware(error, req, res);
    }
  }
};

export { listProductByIdController };
