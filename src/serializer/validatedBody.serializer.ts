import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/appError";
import * as yup from "yup";
import { IAddressRequest, IUserRequest } from "../interfaces/user";

const addressSchema: yup.SchemaOf<IAddressRequest> = yup.object().shape({
  zipCode: yup.string().required().max(8, "Maximum 8 caracters"),
  state: yup.string().required(),
  city: yup.string().required(),
  road: yup.string().required(),
  number: yup.string().required(),
  complement: yup.string(),
});

const schema: yup.SchemaOf<IUserRequest> = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  cpf: yup.string(),
  phone: yup.string(),
  birthdate: yup.string(),
  description: yup.string(),
  type_account: yup.string(),
  password: yup.string(),
  address: addressSchema,
});

const validatedBodySerializer = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { body } = request;

  if (!Object.keys(body).length) {
    throw new AppError("No body", 400);
  }

  try {
    const validated = await schema.validate(body, {
      abortEarly: false,
      stripUnknown: true,
    });

    if (!Object.keys(validated).length) {
      throw new AppError("One or more credential is invalid", 400);
    }

    request.validated = validated;
    next();
  } catch (err: any) {
    return response
      .status(400)
      .json({ message: "One or more credential is invalid" });
  }
};

export default validatedBodySerializer;
