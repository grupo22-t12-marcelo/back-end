import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { createProductService } from "../../services/products/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const data = req.body;
  const id = req.user.id;
  const createdAnnouncement = await createProductService(data, id);
  return res.status(201).json(instanceToInstance(createdAnnouncement));
};

export { createProductController };
