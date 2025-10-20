import { container } from '@/core/container';
import { Router } from 'express';

const ticketEventsRouter = Router();


ticketEventsRouter
  .post('/', (request, response, next) => container.webhooks.controller.ticket.getEvents(request, response, next))

export { ticketEventsRouter };
