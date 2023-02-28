import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { forgotPasswordController } from "../controllers/users/forgotPassword.controller";
import {
  userCreateSchema,
  validateUserCreate,
} from "../middlewares/validateUserCreate.middeware";

const users = Router();

const userRoutes = () => {
  users.post("", validateUserCreate(userCreateSchema), createUserController);
  users.post("/forgot-password", forgotPasswordController);

  return users;
};

export { userRoutes };
