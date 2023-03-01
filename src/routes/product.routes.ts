import { Router } from "express";
import { createProductController } from "../controllers/products/createProduct.controller";
import { deleteProductController } from "../controllers/products/deleteProduct.controller";
import { listAllProductsController } from "../controllers/products/listAllProducts.controller";
import { listProductByIdController } from "../controllers/products/listProductById.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";
import {
  productCreateSchema,
  validateProductCreate
} from "../middlewares/validateProductCreate.middleware";
import verifyUpdatedMiddleware from "../middlewares/verifyUpdate.middleware";

const products = Router();

const productRoutes = () => {
  products.post(
    "", authTokenMiddleware,
    validateProductCreate(productCreateSchema),
    createProductController
  );
  products.get("", listAllProductsController);
  products.get("/:id", listProductByIdController);
  products.patch("/:id", verifyUpdatedMiddleware, updateProductController);
  products.delete('/:id', deleteProductController)
  return products;
};

export { productRoutes };

