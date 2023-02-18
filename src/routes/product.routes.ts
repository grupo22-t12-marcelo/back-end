import { Router } from "express";
import { createProductController } from "../controllers/products/createProduct.controller";

const userRoutes = Router();

const productRoutes = () => {
  userRoutes.post("", createProductController);

  return userRoutes;
};

export { productRoutes };
