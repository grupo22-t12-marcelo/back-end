import { Express } from "express";
import { commentRoutes } from "./comment.routes";
import { productRoutes } from "./product.routes";
import { sessionRoutes } from "./session.routes";
import { userRoutes } from "./user.routes";

const appRoutes = (app: Express) => {
  app.use("/users", userRoutes());
  app.use("/products", productRoutes());
  app.use("/login", sessionRoutes());
  app.use("/comment", commentRoutes())
};

export { appRoutes };

