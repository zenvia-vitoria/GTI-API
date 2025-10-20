import { container } from '@/core/container';
import { Router } from 'express';

const ticketRouter = Router();


ticketRouter
  .post("/", (req, res, next) => { container.api.controller.ticket.create(req, res, next) })

export { ticketRouter };
