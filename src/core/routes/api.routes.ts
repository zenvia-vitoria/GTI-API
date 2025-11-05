import { ticketRouter } from "@/api/contexts/ticket/ticket.routes";
import { validationRouter } from "@/api/contexts/validation/validation.routes";
import { Router } from "express";
const APIRouter = Router();

APIRouter.use("/ticket", ticketRouter).use("/validation", validationRouter);

export { APIRouter };
