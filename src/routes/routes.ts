import { Express } from "express";
import { productRoutes } from "./product.routes";
import sessionRoutes from "./sessions.routes";
import { userRoutes } from "./user.routes";

const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/products", productRoutes());
  app.use("/login", sessionRoutes);
};

export { appRoutes };
