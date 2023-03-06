import { Request, Response } from "express";
import { deleteUserService } from "../../services/users/deleteUser.service";

const deleteUserController = async (req: Request, res: Response) => {
  const { id } = req.user;

  const deleteUser = await deleteUserService(id);

  return res.sendStatus(204);
};

export { deleteUserController };
