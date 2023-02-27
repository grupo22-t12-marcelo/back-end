import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";
import {
  userCreateSchema,
  validateUserCreate,
} from "../middlewares/validateUserCreate.middeware";

const users = Router();

const userRoutes = () => {
  users.post("", validateUserCreate(userCreateSchema), createUserController);

  return users;
};

export { userRoutes };
