import { Request, Response } from "express";
import { IProduct } from "../../interfaces/product";
import { createProductService } from "../../services/users/createProduct.service";

const createProductController = async (req: Request, res: Response) => {
  const data = req.body;
  //const id = req.user.id;
  const createdAnnouncement = await createProductService(data);
  return res.status(201).json(createdAnnouncement);
};

export { createProductController };
