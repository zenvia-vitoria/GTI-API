import { IZccApiClient } from "@/providers/zcc-provider/zcc-provider.interface";
import { ITicketZCCService } from "./interface/ticket.interface";

export class TicketZCCService implements ITicketZCCService {
  constructor(private readonly api: IZccApiClient) { }
  public async create(data: any) {


    const newData = {
      "type": "INTERNAL",
      "subject": "string",
      "cc": [
        "cc1@zenvia.com"
      ],
      "clients": [
        "a4a4bc53-8396-4190-92e3-7edb6826e3dc"
      ],
      "ownerId": "5404ed19-2994-4831-bb33-627e27b18ab1",
      "category": {
        "id": 0
      },
      "urgency": {
        "id": 0
      },
      "status": {
        "id": 0
      },
      "service": {
        "id": 0
      },
      "justification": {
        "id": 0
      },
      "resolvedAt": "2022-05-23T19:37:59.000Z",
      "reopenedAt": "2022-05-23T19:37:59.000Z",
      "closedAt": "2022-05-23T19:37:59.000Z",
      "createdAt": "2022-05-23T19:37:59.000Z",
      "createdById": "3525fdd7-34c7-4159-bf7c-b33e4e772c05",
      "solutionAt": "2022-05-23T19:37:59.000Z",
      "firstAction": {
        "type": "INTERNAL",
        "description": data,
        "createdAt": "2022-05-23T19:37:59.000Z",
        "createdById": "3525fdd7-34c7-4159-bf7c-b33e4e772c05"
      }
    }

    console.log(newData)

    // const createTicket = await this.api.post("/tickets", newData);

    // return createTicket
  }
}
