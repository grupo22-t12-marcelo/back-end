import { Router } from "express";
import { listAllProductsController } from "../controllers/products/listAllProducts.controller";
import { createProductController } from "../controllers/products/createProduct.controller";
import {
  productCreateSchema,
  validateProductCreate,
} from "../middlewares/validateProductCreate.middleware";
import { listProductByIdController } from "../controllers/products/listProductById.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";
import verifyUpdatedMiddleware from "../middlewares/verifyUpdate.middleware";
import { deleteProductController } from "../controllers/products/deleteProduct.controller";

const products = Router();

const productRoutes = () => {
  products.post(
    "",
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
