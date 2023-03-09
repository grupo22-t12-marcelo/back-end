import { Request, Response, NextFunction } from "express";
import * as yup from "yup";
import { SchemaOf } from "yup";
import { IImagesGallery, IProductRequest } from "../interfaces/product";

const imagesSchema: SchemaOf<IImagesGallery> = yup.object().shape({
  image1: yup.string().required(),
  image2: yup.string(),
  image3: yup.string(),
  image4: yup.string(),
  image5: yup.string(),
  image6: yup.string(),
});

const productCreateSchema: SchemaOf<IProductRequest> = yup.object().shape({
  type_announcement: yup.string().oneOf(["Venda", "Leilão"]).required(),
  title: yup.string().required(),
  year: yup.number().positive().required(),
  kilometers: yup.number().required(),
  price: yup.number().positive().required(),
  description: yup.string().required(),
  type_vehicle: yup.string().oneOf(["Carro", "Moto"]).required(),
  image: yup.string().required(),
  imagesGallery: imagesSchema,
});

const validateProductCreate =
  (schema: SchemaOf<IProductRequest>) =>
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

export { productCreateSchema, validateProductCreate };
