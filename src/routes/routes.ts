import { Express } from "express";
import { addressRoutes } from "./address.routes";
import { commentRoutes } from "./comment.routes";
import { productRoutes } from "./product.routes";
import { sessionRoutes } from "./session.routes";
import { userRoutes } from "./user.routes";

const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/products", productRoutes());
  app.use("/login", sessionRoutes());
  app.use("/comment", commentRoutes())
  app.use('/address', addressRoutes())
};

export { appRoutes };

