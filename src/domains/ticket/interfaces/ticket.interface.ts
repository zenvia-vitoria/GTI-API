import { NewTicketEventProps } from "./new-ticket-event.interface";

export interface ITicketEventsService {
  createEvent: (data: NewTicketEventProps) => Promise<any>
}
