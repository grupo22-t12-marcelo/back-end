import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import userUpdateService from "../../services/users/updateUser.service";

const updateUserController = async (request: Request, response: Response) => {
  const { id } = request.user;
  const data = request.body;

  const userUpdate = await userUpdateService(id, data);
  return response.status(200).json(instanceToPlain(userUpdate));
};

export default updateUserController;
