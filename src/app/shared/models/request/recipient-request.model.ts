export class RecipientRequestModel {
  id: string;
  name: string;
  street: string;
  address_number: number;
  complement: string;
  zipcode: string;
  state: string;
  city: string;

  constructor(data: RecipientRequestModel) {
    this.id = data.id;
    this.name = data.name;
    this.street = data.street;
    this.address_number = data.address_number;
    this.complement = data.complement;
    this.state = data.state;
    this.city = data.city;
    this.zipcode = data.zipcode;
  }
}
