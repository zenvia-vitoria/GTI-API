import { NewTicketEvent } from "@/domains/ticket/entities/new-ticket.event.entity";
import { NewTicketEventProps } from "@/domains/ticket/interfaces/new-ticket-event.interface";
import { ITicketEventsService } from "@/domains/ticket/interfaces/ticket.interface";

export class TicketEventService implements ITicketEventsService {
  public async createEvent(dataEvent: NewTicketEventProps) {
    const event = new NewTicketEvent(dataEvent);
    return event.handler()
  }
}
