import { NextFunction, Request, Response } from "express";
import { IValitionService } from "./interface/valitaion.interface";

export class ValitaionController {
  constructor(private readonly validationService: IValitionService) {}

  public async document(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const { document } = request.params;
      const handler = await this.validationService.validateDocument(document);

      return response.status(200).json({
        isValid: handler,
      });
    } catch (err) {
      return next(err);
    }
  }
}
