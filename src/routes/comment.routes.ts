import { Router } from "express";
import { createSessionController } from "../controllers/session/createSession.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const session = Router();

const commentRoutes = () => {
  session.post("/:product_id",authTokenMiddleware, createSessionController);

  return session;
};

export { commentRoutes };