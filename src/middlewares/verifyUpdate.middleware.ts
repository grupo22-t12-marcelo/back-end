import { NextFunction, Request, response, Response } from "express";
import { AppError } from "../errors/appError";

const verifyUpdatedMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const data = req.body;

  const keys = Object.keys(data);

  const notChange = keys.find((key) => key === "id");

  if (notChange) throw new AppError(`${notChange} cannot be changed`, 401);

  next();
};

export default verifyUpdatedMiddleware;
