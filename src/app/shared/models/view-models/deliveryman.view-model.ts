export class DeliveryManViewModel {
  id: string;
  name: string;
  email: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: DeliveryManViewModel) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
