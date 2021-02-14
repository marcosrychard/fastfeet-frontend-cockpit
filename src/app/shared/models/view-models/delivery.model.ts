export interface IDelivery {
  id: number;
  product: string;
  canceled_at: Date;
  start_date: Date;
  end_date: Date;
  delivery_id: number;
  deliveryman_id: number;
  signature_url: string;
  recipient_id: number;
  delivery_status_id: number;
}
