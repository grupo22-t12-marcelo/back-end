import { Router } from "express";
import { createSessionController } from "../controllers/session/sessionscontroller";

const sessionRoutes = Router();

sessionRoutes.post("", createSessionController);

export default sessionRoutes;
