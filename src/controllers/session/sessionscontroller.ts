import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { createSessionService } from "../../services/sessions/createSession.service";

const createSessionController = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    const token = await createSessionService({ username, password });

    return res.status(200).json({ token });
  } catch (error) {
    if (error instanceof AppError) {
      const { statusCode, message } = error;
      throw new AppError(message, statusCode);
    }
  }
};

export { createSessionController };
