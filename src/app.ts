import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";

let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(handleErrorMiddleware);

export default app;
