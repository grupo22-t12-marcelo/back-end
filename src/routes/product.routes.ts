import { Router } from "express";
import { createProductController } from "../controllers/products/createProduct.controller";
import {
  productCreateSchema,
  validateProductCreate,
} from "../middlewares/validateProductCreate.middleware";

const userRoutes = Router();

const productRoutes = () => {
  userRoutes.post(
    "",
    validateProductCreate(productCreateSchema),
    createProductController
  );

  return userRoutes;
};

export { productRoutes };
