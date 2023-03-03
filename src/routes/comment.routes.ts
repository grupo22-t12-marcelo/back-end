import { Router } from "express";
import { createCommentController } from "../controllers/comment/createComment.controller";
import { deleteProductByIdController } from "../controllers/comment/deleteComments.controllers";
import { listCommentByIdProductController } from "../controllers/comment/listCommentByIdProduct.controller";
import authTokenMiddleware from "../middlewares/authToken.middleware";

const session = Router();

const commentRoutes = () => {
  session.post("/:product_id", authTokenMiddleware, createCommentController);
  session.delete("",authTokenMiddleware, deleteProductByIdController);
  session.get("/:product_id", listCommentByIdProductController )

  return session;
};

export { commentRoutes };

