import { Request, Response, NextFunction } from "express";
import type { IServicingService } from "./interface/servicing.interface";

export class ServicingController {
  constructor(private readonly service: IServicingService) {
    this.service = service;
  }

  public async show(request: Request, response: Response, next: NextFunction) {
    try {
      const { uf } = request.params;
      const handler = this.service.findByUF(uf);

      return response.status(200).json({
        message: "Lista de serviços",
        status: true,
        data: handler,
      });
    } catch (error) {
      return next(error);
    }
  }
}
