import { servicingRouter } from "@/api/contexts/servicing/servicing.routes";
import { ticketRouter } from "@/api/contexts/ticket/ticket.routes";
import { validationRouter } from "@/api/contexts/validation/validation.routes";
import { Router } from "express";
const APIRouter = Router();

APIRouter.use("/servicing", servicingRouter);
APIRouter.use("/ticket", ticketRouter);
APIRouter.use("/validation", validationRouter);
export { APIRouter };
