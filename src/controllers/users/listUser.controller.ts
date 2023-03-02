import { Request, Response } from "express";
import { listUserService } from "../../services/users/listUser.service";

const listUserController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const listUser = await listUserService(id);
};

export { listUserController };
