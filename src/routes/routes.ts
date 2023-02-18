import { Express } from "express";
import { productRoutes } from "./product.routes";

const appRoutes = (app: Express) => {
  app.use("/products", productRoutes());
};

export { appRoutes };
