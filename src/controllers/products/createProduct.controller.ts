import { Request, Response } from "express";
import { createProductService } from "../../services/products/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const data = req.body;
  //const id = req.user.id;
  const createdAnnouncement = await createProductService(data);
  return res.status(201).json(createdAnnouncement);
};

export { createProductController };
