import { DeliveryViewModel } from './delivery.view-model';

export class DeliveryProblemViewModel {
  id: number;
  description: string;
  delivery_id: string;
  delivery: DeliveryViewModel;
  created_at: Date;
  updated_at: Date;

  constructor(data: DeliveryProblemViewModel) {
    this.id = data.id;
    this.description = data.description;
    this.delivery_id = data.delivery_id;
    this.delivery = data.delivery;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
