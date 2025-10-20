import { Request, Response, Router } from 'express';
import { APIRouter } from './api.routes';
import { WebhookRouter } from './webhook.routes';

const mainRouter = Router();


mainRouter.get("/", (
  _: Request,
  response: Response
) => {
  return response.status(200).send()
})

mainRouter.use("/api", APIRouter)
mainRouter.use("/webhook", WebhookRouter)


export { mainRouter };
