export type NewTicketEventProps = {
  data: Record<string, string>,
  person: NewTicketPersonEventProps,
  address: NewTicketAddressEventProps
}

export type NewTicketPersonEventProps = {
  telefone: string
  whatsapp: string
  documento: string
  tipo_pessoa: string
  atual_numero: string
  nomecompleto: string
}

export type NewTicketAddressEventProps = {
  city: string;
  state: string;
  number: string;
  street: string;
  details: NewTicketAddressDetailsEventProps
  district: string
  zip_code: string
  complement: string
}


export type NewTicketAddressDetailsEventProps = {
  bloco: string
  condominio: string
  apartamento_numero: string
}
