import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import { appRoutes } from "./routes/routes";

let cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (require, response) => {
  response.send("Hi folks");
});

//appRoutes(app);

app.use(handleErrorMiddleware);

export default app;
