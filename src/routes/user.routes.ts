import { Router } from "express";
import { createUserController } from "../controllers/users/createUser.controller";

const users = Router();

const userRoutes = () => {
  users.post("", createUserController);

  return users;
};

export { userRoutes };
