export class DeliverymanRequestModel {
  id: string;
  name: string;
  email: string;

  constructor(data: DeliverymanRequestModel) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
  }
}
