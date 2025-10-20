interface ITicketRepository {

}

interface ITicketService {

}

interface ITicketZCCService {
  create: (data: any) => Promise<any>
}

export {
  ITicketRepository,
  ITicketService,
  ITicketZCCService
};
