import { NewTicketEvent } from "@/domains/ticket/entities/new-ticket.event.entity";
import { IZccApiClient } from "@/providers/zcc-provider/zcc-provider.interface";
import { ITicketZCCService } from "./interface/ticket.interface";

export class TicketZCCService implements ITicketZCCService {
  constructor(private readonly api: IZccApiClient) {}
  public async create(data: any) {
    const newTicket = new NewTicketEvent(data);
    const ticket = await newTicket.handler();

    const newData = {
      type: "INTERNAL",
      subject: "string",
      clients: ["5b30807b-10b9-4e58-bc15-6991c09ad15e"],
      category: {
        id: 287269,
      },
      urgency: {
        id: 212376,
      },
      status: {
        id: 352384,
      },
      service: {
        id: 1376455,
      },
      createdById: "5b30807b-10b9-4e58-bc15-6991c09ad15e",
      firstAction: {
        type: "INTERNAL",
        description: ticket,
        createdById: "5b30807b-10b9-4e58-bc15-6991c09ad15e",
      },
    };

    const createTicket = await this.api.post("/tickets", newData);
    return createTicket;
  }
}
