import { ticketRouter } from '@/api/contexts/ticket/ticket.routes';
import { Router } from "express";
const APIRouter = Router();


APIRouter
  .use("/ticket", ticketRouter)


export { APIRouter };

