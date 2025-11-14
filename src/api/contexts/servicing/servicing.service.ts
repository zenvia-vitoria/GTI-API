import { Exception } from "@/core/exception";
import type {
  IServicingService,
  IServicingServiceFindByID,
} from "./interface/servicing.interface";
import database from "./servicing.database.json";
export class ServicingService implements IServicingService {
  public findByUF(uf: string) {
    const keys = Object.keys(database);
    const find = keys.find((i) => i === uf);

    if (!find) throw new Exception("Não encontramos o estado informado.", 400);

    const services = database[find];

    let items = [];

    for (let service of services) {
      const item = `${service.id} - ${service.servico}\n${service.preco}`;
      items.push(item);
    }

    return items.join("\n\n");
  }
  public findByID({ id, uf }: IServicingServiceFindByID) {
    const list = database[uf];

    if (isNaN(Number(id))) throw new Exception("Serviço inválido.", 400);

    const find = list.find((i) => i.id === Number(id));

    if (!find) throw new Exception("Serviço não encontrado.", 400);

    return `${find.id} - ${find.servico} - ${find.preco}`;
  }
}
