import { Router } from "express";

import {login} from "../controllers/authController.js"
import { validate } from "../utils/validateSchema.js";
import { loginSchema } from "../zod-schemas/authSchema.js";

export const authRouter = Router();



authRouter.post("/login", validate(loginSchema), login)
