import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";
import "dotenv/config";

import { AppError } from "../../errors/appError";
import * as bcrypt from "bcryptjs";
import * as nodemailer from "nodemailer";
import * as crypto from "crypto";

const forgotPasswordService = async (email: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });

  if (!user) {
    throw new AppError("User not found");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: process.env.USER_EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const newPassword = crypto.randomBytes(4).toString("hex");

  transporter
    .sendMail({
      from: process.env.USER_EMAIL,
      to: email,
      subject: "Recuperação de senha",
      html: `<p>Olá, sua nova senha para acessar o sistema é: ${newPassword}</p><br/><a href="http://localhost:3000/login">Sistema</a>`,
    })
    .then(() => {
      bcrypt.hash(newPassword, 8).then((password) => {
        userRepository.update(user!.id, {
          password: password,
        });
      });
    });

  return true;
};

export { forgotPasswordService };
