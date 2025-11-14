import { ServicingController } from "@/api/contexts/servicing/servicing.controller";
import { ServicingService } from "@/api/contexts/servicing/servicing.service";
import { TicketController } from "@/api/contexts/ticket/ticket.controller";
import { TicketZCCService } from "@/api/contexts/ticket/ticket.zcc.service";
import { ValitaionController } from "@/api/contexts/validation/validation.controller";
import { ValitionService } from "@/api/contexts/validation/validation.service";
import { TicketEventsController } from "@/events/contexts/ticket/ticket.controller";
import { TicketEventService } from "@/events/contexts/ticket/ticket.service";
import { ZCCApiClient } from "@/providers/zcc-provider/implementations/handler";

import "dotenv/config";

const api = new ZCCApiClient({
  apiKey: process.env.ZCC_API_KEY,
});

const ticketController = new TicketController(new TicketZCCService(api));
const ticketEventsController = new TicketEventsController(
  new TicketEventService()
);
const servicingService = new ServicingService();
const servicingController = new ServicingController(servicingService);

const validationController = new ValitaionController(new ValitionService());

export const container = {
  api: {
    controller: {
      servicing: servicingController,
      ticket: ticketController,
      validation: validationController,
    },
  },
  webhooks: {
    controller: {
      ticket: ticketEventsController,
    },
  },
};
