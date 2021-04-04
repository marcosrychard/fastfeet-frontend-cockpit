export class RecipientViewModel {
  id: string;
  name: string;
  street: string;
  address_number: number;
  complement: string;
  state: string;
  city: string;
  zipcode: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: RecipientViewModel) {
    this.id = data.id;
    this.name = data.name;
    this.street = data.street;
    this.address_number = data.address_number;
    this.complement = data.complement;
    this.state = data.state;
    this.city = data.city;
    this.zipcode = data.zipcode;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
