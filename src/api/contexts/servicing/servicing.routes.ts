import { container } from "@/core/container";
import { Router } from "express";

const servicingRouter = Router();

servicingRouter.get("/:uf/:id", (req, res, next) => {
  container.api.controller.servicing.show(req, res, next);
});

servicingRouter.get("/:uf", (req, res, next) => {
  container.api.controller.servicing.index(req, res, next);
});
export { servicingRouter };
