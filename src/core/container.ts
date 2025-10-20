import { TicketController } from "@/api/contexts/ticket/ticket.controller";
import { TicketZCCService } from "@/api/contexts/ticket/ticket.zcc.service";
import { TicketEventsController } from "@/events/contexts/ticket/ticket.controller";
import { TicketEventService } from "@/events/contexts/ticket/ticket.service";
import { ZCCApiClient } from "@/providers/zcc-provider/implementations/handler";

import 'dotenv/config';

const api = new ZCCApiClient({
  apiKey: process.env.ZCC_API_KEY
})


const ticketController = new TicketController(new TicketZCCService(api));
const ticketEventsController = new TicketEventsController(new TicketEventService());

export const container = {
  api: {
    controller: {
      ticket: ticketController
    }
  },
  webhooks: {
    controller: {
      ticket: ticketEventsController
    }
  }
}
