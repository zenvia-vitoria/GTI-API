import { NextFunction, Request, Response } from "express";
import { ITicketZCCService } from "./interface/ticket.interface";

export class TicketController {
  constructor(private readonly ticketZCCService: ITicketZCCService) {}

  public async create(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const data = request.body;

      console.log(request.body);

      const handler = await this.ticketZCCService.create(data);

      return response.status(200).json({
        message: "Ticket criado com sucesso.",
        status: true,
        data: handler,
      });
    } catch (err) {
      return next(err);
    }
  }
}
