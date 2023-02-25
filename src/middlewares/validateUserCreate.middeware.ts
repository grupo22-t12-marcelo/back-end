import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/user";

const userCreateSchema: SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  cpf: yup.string().required(),
  phone: yup.string().required(),
  birthdate: yup.string().required(),
  description: yup.string().required(),
  type_account: yup.string().oneOf(["Comprador", "Anunciante"]).required(),
  password: yup.string().required(),
});

const validateUserCreate =
  (schema: SchemaOf<IUserRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;

      try {
        await schema.validate(data, {
          abortEarly: false,
          stripUnknown: true,
        });

        next();
      } catch (err: any) {
        return res.status(400).json({
          message: err.errors?.join(", "),
        });
      }
    } catch (err) {
      next(err);
    }
  };

export { userCreateSchema, validateUserCreate };
