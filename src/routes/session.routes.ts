import { Router } from "express";
import { createSessionController } from "../controllers/session/createSession.controller";

const session = Router();

const sessionRoutes = () => {
  session.post("", createSessionController);

  return session;
};

export { sessionRoutes };
