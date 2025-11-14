import { container } from "@/core/container";
import { Router } from "express";

const servicingRouter = Router();

servicingRouter.get("/:uf", (req, res, next) => {
  container.api.controller.servicing.show(req, res, next);
});

export { servicingRouter };
