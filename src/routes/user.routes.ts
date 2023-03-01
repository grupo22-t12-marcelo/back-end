import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import { deleteUserController } from "../controllers/users/deleteUser.controller";
import { forgotPasswordController } from "../controllers/users/forgotPassword.controller";
import {
  userCreateSchema,
  validateUserCreate,
} from "../middlewares/validateUserCreate.middeware";

const users = Router();

const userRoutes = () => {
  users.post("", validateUserCreate(userCreateSchema), createUserController);
  users.post("/forgot-password", forgotPasswordController);
  users.delete("/:id", deleteUserController);

  return users;
};

export { userRoutes };
