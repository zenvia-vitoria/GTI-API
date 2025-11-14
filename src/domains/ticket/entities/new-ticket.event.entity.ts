import {
  NewTicketAddressEventProps,
  NewTicketEventProps,
  NewTicketPersonEventProps,
} from "../interfaces/new-ticket-event.interface";

export class NewTicketEvent {
  private props: NewTicketEventProps;

  constructor(props: NewTicketEventProps) {
    this.props = props;
  }
  public async handler() {
    const addressText = this.getAddress(this.props.address);
    const personText = this.getPerson(this.props.person);
    const dataText = this.getDynamicDataText(this.props.data);

    const fullTicketText = `
      --- DADOS DA PESSOA ---
      ${personText}

      --- ENDEREÇO DE ATENDIMENTO ---
      ${addressText}

      --- DADOS DO CHAMADO ---
      ${dataText}
    `;

    return fullTicketText;
  }

  private getAddress(address: NewTicketAddressEventProps) {
    const text = `

    LOGRADOURO: ${address.street}
    BAIRRO: ${address.district}
    NUMERO: ${address.number}
    CIDADE: ${address.city}
    ESTADO: ${address.state}
    CEP: ${address.zip_code}


    DETALHES:
     - BLOCO: ${address.details.bloco}
     - CONDOMINIO: ${address.details.condominio}
     - APARTAMENTO:${address.details.apartamento_numero}
    `;

    return text;
  }

  private getPerson(person: NewTicketPersonEventProps) {
    const text = `
      TELEFONE: ${person.telefone}
      WHATSAPP? ${person.whatsapp}

      TIPO DE PESSOA: ${person.tipo_pessoa}
      DOCUMENTO: ${person.documento}

      NOME COMPLETO: ${person.nomecompleto}
    `;

    return text;
  }

  private getDynamicDataText(data: Record<string, any>): string {
    const keys = Object.keys(data);

    const lines = keys.map((key) => {
      const formattedKey = this.formatKey(key);
      const value = data[key];
      return `${formattedKey}: ${value}`;
    });

    return lines.join("\n");
  }
  private formatKey(key: string): string {
    return key.replace(/_/g, " ").toUpperCase();
  }
}
