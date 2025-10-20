import { NewTicketEvent } from "@/domains/ticket/entities/new-ticket.event.entity";
import { IZccApiClient } from "@/providers/zcc-provider/zcc-provider.interface";
import { ITicketZCCService } from "./interface/ticket.interface";

export class TicketZCCService implements ITicketZCCService {
  constructor(private readonly api: IZccApiClient) { }
  public async create(data: any) {
    const newTicket = new NewTicketEvent(data);
    const ticket = await newTicket.handler();

    const newData = {
      "type": "INTERNAL",
      "subject": "string",
      "clients": [
        "c19f79dc-b78b-4b44-8473-1dcf4c40152e"
      ],
      "ownerId": "94efc127-0ecb-4684-afd0-862fd5d1b481",
      "category": {
        "id": 287269
      },
      "urgency": {
        "id": 212376
      },
      "status": {
        "id": 352384
      },
      "service": {
        "id": 1376455
      },
      "createdById": "0d034624-2c95-4e68-9390-b6e8cc8413e8",
      "firstAction": {
        "type": "INTERNAL",
        "description": ticket,
        "createdById": "0d034624-2c95-4e68-9390-b6e8cc8413e8",
      }
    }

    const createTicket = await this.api.post("/tickets", newData);
    return createTicket
  }
}
