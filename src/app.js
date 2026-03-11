import express from "express";
import { authRouter } from "./routes/authRouter.js";

import helmet from "helmet";
import httpLogger from "./middlewares/httpLogger.js";
import rateLimiter from "./middlewares/rateLimiter.js";
import globalErrorHandler from "./middlewares/errorHandler.js";
import notFound from "./middlewares/notFound.js";

export const app = express();

app.use(helmet()); //security or prevents attacks

app.use(express.json()); //parse req.body

app.use(httpLogger); //logs

app.use(rateLimiter); //rate limiter

//routes
app.use("/api/v1/auth", authRouter);

app.use(notFound); //not found route

app.use(globalErrorHandler); //global error handler
