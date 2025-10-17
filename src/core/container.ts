import { TicketController } from "@/contexts/ticket/ticket.controller";
import { TicketZCCService } from "@/contexts/ticket/ticket.zcc.service";
import { ZCCApiClient } from "@/providers/zcc-provider/implementations/handler";

const api = new ZCCApiClient({
  apiKey: process.env.ZCC_TOKEN
})


const ticketController =
  new TicketController(
    new TicketZCCService(api)
  );

export const container = {

  controller: {
    ticket: ticketController
  }
}
