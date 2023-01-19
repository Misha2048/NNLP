import { Router } from "express";
import { AuthController } from "../controllers";
import { auth } from "../middleware";

export const AuthRouter = Router();

AuthRouter.post("/register", AuthController.register);
AuthRouter.patch("/login", AuthController.login);
AuthRouter.patch("/logout", auth, AuthController.logout);