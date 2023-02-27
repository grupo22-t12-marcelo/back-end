import { Request, Response } from "express";
import { createUserService } from "../../services/users/createUser.service";
import { instanceToInstance } from "class-transformer";

const createUserController = async (req: Request, res: Response) => {
  const data = req.body;
  const createdUser = await createUserService(data);
  return res.status(201).json(instanceToInstance(createdUser));
};

export { createUserController };
