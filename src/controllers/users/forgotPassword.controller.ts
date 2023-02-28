import { Request, Response } from "express";
import { AppError } from "../../errors/appError";
import { forgotPasswordService } from "../../services/users/forgotPassword.service";

const forgotPasswordController = async (req: Request, res: Response) => {
  try {
    const { email } = req.body;
    await forgotPasswordService(email);

    return res.status(200).json({ message: "Email enviado com sucesso!" });
  } catch (error) {
    if (error instanceof AppError) {
      const { statusCode, message } = error;
      throw new AppError(message, statusCode);
    }
  }
};

export { forgotPasswordController };
