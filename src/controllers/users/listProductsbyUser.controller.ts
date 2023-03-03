import { instanceToInstance } from "class-transformer";
import { Request, Response } from "express";
import { listProductsbyUserService } from "../../services/users/listProductsbyUser.service";

const listProductsbyUserController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const listProducts = await listProductsbyUserService(id);

  return res.json(instanceToInstance(listProducts));
};

export { listProductsbyUserController };
