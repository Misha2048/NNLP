import { Router } from "express";
import { CourseController } from "../controllers";
import { auth } from "../middleware";

export const CourseRouter = Router();

CourseRouter.get("/", CourseController.getAllCourses);
CourseRouter.get("/:id", CourseController.getCourse);
CourseRouter.get("/:id/users", CourseController.getUsersOnCourse);
CourseRouter.get("/:id/literature", CourseController.getLiteratureOnCourse);
CourseRouter.post("/", CourseController.createCourse);
CourseRouter.put("/:id", CourseController.updateCourse);
CourseRouter.patch("/:id/subscribe", auth, CourseController.subscribe);
CourseRouter.patch("/:id/unsubscribe", auth, CourseController.unsubscribe);
CourseRouter.delete("/:id", CourseController.deleteCourse);