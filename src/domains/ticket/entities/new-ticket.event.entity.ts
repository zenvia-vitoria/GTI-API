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
      <br/><br/><br/>
      --- ENDEREÇO DE ATENDIMENTO ---
      ${addressText}
      <br/><br/><br/>
      --- DADOS DO CHAMADO ---
      ${dataText}
    `;

    return fullTicketText;
  }

  private getAddress(address: NewTicketAddressEventProps) {
    const text = `
    <strong>LOGRADOURO:</strong> ${address.street} <br/>
    <strong>BAIRRO:</strong> ${address.district}<br/>
    <strong>NUMERO:</strong> ${address.number}<br/>
    <strong>CIDADE:</strong> ${address.city}<br/>
    <strong>ESTADO:</strong> ${address.state}<br/>
    <strong>CEP:</strong> ${address.zip_code}<br/>


    <strong>DETALHES:</strong><br/>
     <strong>- BLOCO: </strong> ${address.details.bloco}<br/>
     <strong>- CONDOMINIO: </strong> ${address.details.condominio}<br/>
     <strong>- APARTAMENTO: </strong>${address.details.apartamento_numero}<br/>
    `;

    return text;
  }

  private getPerson(person: NewTicketPersonEventProps) {
    const text = `
      <strong>TELEFONE:</strong> ${person.telefone}<br/>
      <strong>WHATSAPP?</strong> ${person.whatsapp}<br/><br/>
      <strong>TIPO DE PESSOA:</strong> ${person.tipo_pessoa}<br/>
      <strong>DOCUMENTO:</strong> ${person.documento}<br/><br/>
      <strong>NOME COMPLETO:</strong> ${person.nomecompleto}<br/>
    `;

    return text;
  }

  private getDynamicDataText(data: Record<string, any>): string {
    const keys = Object.keys(data);

    const lines = keys.map((key) => {
      const formattedKey = this.formatKey(key);
      const value = data[key];
      return `<strong>${formattedKey}:</strong> ${value}<br/>`;
    });

    return lines.join("\n");
  }
  private formatKey(key: string): string {
    return key.replace(/_/g, " ").toUpperCase();
  }
}
