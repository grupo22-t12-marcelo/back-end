import { User } from "../../entities/users.entity";
import { IUserLogin } from "../../interfaces/user";
import AppDataSource from "../../data-source";
import { AppError } from "../../errors/appError";
import { compareSync } from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createSessionService = async ({ email, password }: IUserLogin) => {
  if (!email) {
    throw new AppError("Field email is required");
  }

  if (!password) {
    throw new AppError("Field password is required");
  }

  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.find();

  const accountUser = user.find((user) => user.email === email);

  if (!accountUser) {
    throw new AppError("Account not found", 403);
  }

  if (!compareSync(password, accountUser.password)) {
    throw new AppError("Wrong email/password");
  }

  const token = jwt.sign(
    {
      user: accountUser.name,
      id: accountUser.id,
    },
    process.env.SECRET_KEY as string,
    {
      expiresIn: "24h",
      subject: accountUser.id,
    }
  );

  return { token: token };
};

export { createSessionService };
