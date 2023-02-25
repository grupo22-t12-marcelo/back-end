import { Express } from "express";
import { productRoutes } from "./product.routes";
import { userRoutes } from "./user.routes";

const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/products", productRoutes());
};

export { appRoutes };
