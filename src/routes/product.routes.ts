import { Router } from "express";
import { createProductController } from "../controllers/products/createProduct.controller";
import { deleteProductController } from "../controllers/products/deleteProduct.controller";
import { listAllProductsController } from "../controllers/products/listAllProducts.controller";
import { listProductByIdController } from "../controllers/products/listProductById.controller";
import { updateProductController } from "../controllers/products/updateProduct.controller";
import verifyTokenMiddleware from "../middlewares/verifyToken.middleware";
import verifyUpdatedMiddleware from "../middlewares/verifyUpdate.middleware";
import {
  productCreateSchema,
  validateProductCreate
} from "../serializer/validateProductCreate.middleware";

const products = Router();

const productRoutes = () => {
  products.post(
    "",
    verifyTokenMiddleware,
    validateProductCreate(productCreateSchema),
    createProductController
  );
  products.get("", listAllProductsController);
  products.get("/:id", listProductByIdController);
  products.patch(
    "/:id",
    verifyTokenMiddleware,
    verifyUpdatedMiddleware,
    updateProductController
  );
  products.delete("/:id", verifyTokenMiddleware, deleteProductController);
  return products;
};

export { productRoutes };

