import { Router } from "express";
import { UserController } from "../controllers";
import { auth, checkPermissions } from "../middleware";

export const UserRouter = Router();

UserRouter.get("/:id", UserController.getUser);
UserRouter.get("/", UserController.getUsers);
UserRouter.get("/:id/courses", UserController.getCourses);
UserRouter.post("/", UserController.createUser);
UserRouter.put("/:id", UserController.updateUser);
UserRouter.delete("/:id", UserController.deleteUser);