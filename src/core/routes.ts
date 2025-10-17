import { ticketRouter } from '@/contexts/ticket/ticket.routes';
import { Request, Response, Router } from 'express';

const mainRouter = Router();


mainRouter.get("/", (
  _: Request,
  response: Response
) => {
  return response.status(200).send()
})

mainRouter.use("/ticket", ticketRouter);


export { mainRouter };
