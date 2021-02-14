
export class DeliveryRequestModel {
    id: string;
    product: string;
    deliveryman_id: string;
    recipient_id: string;

    constructor(data: DeliveryRequestModel) {
        this.id = data.id;
        this.product = data.product;
        this.deliveryman_id = data.deliveryman_id;
        this.recipient_id = data.recipient_id;
    }
}
