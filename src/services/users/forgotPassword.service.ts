import { User } from "../../entities/users.entity";
import AppDataSource from "../../data-source";

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
    host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "42f8a43cf5ab3e",
      pass: "5fea1e516e632e",
    },
  });

  const newPassword = crypto.randomBytes(4).toString("hex");

  transporter
    .sendMail({
      from: "Administrador <6384f2786c-00a7a1@inbox.mailtrap.io>",
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
