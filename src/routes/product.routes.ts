import { Router } from "express";
import { listAllProductsController } from "../controllers/products/listAllProducts.controller";
import { createProductController } from "../controllers/products/createProduct.controller";
import {
  productCreateSchema,
  validateProductCreate,
} from "../middlewares/validateProductCreate.middleware";
import { listProductByIdController } from "../controllers/products/listProductById.controller";

const userRoutes = Router();

const productRoutes = () => {
  userRoutes.post(
    "",
    validateProductCreate(productCreateSchema),
    createProductController
  );
  userRoutes.get("", listAllProductsController);
  userRoutes.get("/:id", listProductByIdController);

  return userRoutes;
};

export { productRoutes };
