import { container } from "@/core/container";
import { Router } from "express";

const validationRouter = Router();

validationRouter.get("/document/:document", (req, res, next) => {
  container.api.controller.validation.document(req, res, next);
});

export { validationRouter };
