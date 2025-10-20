import { ITicketEventsService } from "@/domains/ticket/interfaces/ticket.interface";
import {
  NextFunction, Request,
  Response
} from "express";

export class TicketEventsController {
  constructor(
    private readonly ticketEventService: ITicketEventsService
  ) {

  }

  public async getEvents(
    request: Request,
    response: Response,
    next: NextFunction
  ) {
    try {
      const { service } = request.body;

      const handler = await this.ticketEventService.createEvent(request.body)
      return response.status(200)
        .json({
          message: "Evento",
          status: true,
          data: handler
        })
    } catch (err) {
      return next(err)
    }
  }
}
