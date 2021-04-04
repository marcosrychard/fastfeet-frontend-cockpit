export class DeliveryStatusViewModel {
  id: string;
  name: string;
  description: string;
  primary_color: string;
  segudary_color: string;
  value_status: string;
  created_at: Date;
  updated_at: Date;

  constructor(data: DeliveryStatusViewModel) {
    this.id = data.id;
    this.name = data.name;
    this.description = data.description;
    this.primary_color = data.primary_color;
    this.segudary_color = data.segudary_color;
    this.value_status = data.value_status;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
  }
}
