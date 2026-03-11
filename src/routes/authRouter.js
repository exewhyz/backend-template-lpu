import { Router } from "express";

import { validate } from "../utils/validateSchema.js";
import { loginSchema } from "../zod-schemas/authSchema.js";

import { login, getUsers } from "../controllers/authController.js";

export const authRouter = Router();

authRouter.post("/login", validate(loginSchema), login);
authRouter.get("/users", getUsers);
