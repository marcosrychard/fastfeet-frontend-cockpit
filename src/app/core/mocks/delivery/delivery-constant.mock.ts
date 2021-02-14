import { DeliveryRequestModel } from 'src/app/shared/models/request/delivery-request.model';

export const DELIVERY: DeliveryRequestModel = {
    id: '7d7b3c44-8d1d-4776-8e35-12366a93ca75',
    product: 'teste teste',
    deliveryman_id: '02383876-ae00-4095-a828-2c2c7053711c',
    recipient_id: '16080449-8a3d-4c7c-a79e-5cee98eb245e',
};

export const DELIVERY_EMPYT: DeliveryRequestModel = {
    id: null,
    product: null,
    deliveryman_id: null,
    recipient_id: null

}

export const DELIVERY_NOT_ID: DeliveryRequestModel = {
    id: null,
    product: 'teste teste',
    deliveryman_id: '02383876-ae00-4095-a828-2c2c7053711c',
    recipient_id: '16080449-8a3d-4c7c-a79e-5cee98eb245e',
}

export const DELIVERIES: DeliveryRequestModel[] = [
    {
        id: '7d7b3c44-8d1d-4776-8e35-12366a93ca75',
        product: 'teste teste',
        deliveryman_id: '02383876-ae00-4095-a828-2c2c7053711c',
        recipient_id: '16080449-8a3d-4c7c-a79e-5cee98eb245e',
    }
];

