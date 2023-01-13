import { Router } from "express";
import { LiteratureController } from "../controllers";

export const LiteratureRouter = Router();

LiteratureRouter.get("/", LiteratureController.getAllLiterature);
LiteratureRouter.get("/:id", LiteratureController.getLiterature);
LiteratureRouter.post("/", LiteratureController.createLiterature);
LiteratureRouter.put("/:id", LiteratureController.updateLiterature);
LiteratureRouter.delete("/:id", LiteratureController.deleteLiterature);