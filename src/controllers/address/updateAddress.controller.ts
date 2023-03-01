import { Request, Response } from "express";
import addressUpdateService from "../../services/address/updateAddress.service";

const addressUpdateController = async (
  request: Request,
  response: Response
) => {
  const { id } = request.user;
  const data = request.validated;

  const userUpdate = await addressUpdateService(id, data);
  return response.status(200).json(userUpdate);
};

export default addressUpdateController;
