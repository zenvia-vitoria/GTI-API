import { IValitionService } from "./interface/valitaion.interface";
import { validarCPFCNPJ } from "./validation.helper";

export class ValitionService implements IValitionService {
  public async validateDocument(document: string) {
    const validate = await validarCPFCNPJ(document);
    return validate;
  }
}
