import express from "express";
import { authRouter } from "./routes/authRouter.js";
import globalErrorHandler from "./middlewares/errorHandler.js";

export const app = express();

app.use(express.json());


app.use("/api/v1/auth", authRouter)

app.use(globalErrorHandler);