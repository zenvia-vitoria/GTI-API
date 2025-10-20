import { ticketEventsRouter } from "@/events/contexts/ticket/ticket.routes";
import { Router } from "express";

const WebhookRouter = Router();

WebhookRouter
  .use('/ticket', ticketEventsRouter)

export { WebhookRouter };
