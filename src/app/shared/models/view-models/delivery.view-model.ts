import { DeliveryStatusPaginatorResponseModel } from '../response/delivery-status-paginator-response.model';
import { DeliveryManPaginatorResponseModel } from '../response/deliveryman-paginator-response.model';
import { RecipientPaginatorResponseModel } from '../response/recipient-response.model';

export class DeliveryViewModel {
  id: string;
  product: string;
  start_date: Date;
  end_date: Date;
  canceled_at: Date;
  delivery_status_id: string;
  deliveryman_id: string;
  recipient_id: string;
  created_at: Date;
  updated_at: Date;
  delivery_status: DeliveryStatusPaginatorResponseModel;
  deliveryman: DeliveryManPaginatorResponseModel;
  recipient: RecipientPaginatorResponseModel;

  constructor(data: DeliveryViewModel) {
    this.id = data.id;
    this.product = data.product;
    this.start_date = data.start_date;
    this.end_date = data.end_date;
    this.canceled_at = data.canceled_at;
    this.deliveryman_id = data.deliveryman_id;
    this.recipient_id = data.recipient_id;
    this.created_at = data.created_at;
    this.updated_at = data.updated_at;
    this.delivery_status = data.delivery_status;
    this.deliveryman = data.deliveryman;
    this.recipient = data.recipient;
  }
}
