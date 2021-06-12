import { Validators } from '@angular/forms';
import { DeliveryRequestModel } from 'src/app/shared/models/request/delivery-request.model';
import { DeliveryViewModel } from 'src/app/shared/models/view-models/delivery.view-model';

export const FORM_BUILDER_DELIVERY = {
  id: [null],
  product: [null, Validators.required],
  deliveryman_id: [null, Validators.required],
  recipient_id: [null, Validators.required],
};

export const DELIVERY_VALID_REQ: DeliveryRequestModel = {
  id: '7d7b3c44-8d1d-4776-8e35-12366a93ca75',
  product: 'teste teste',
  deliveryman_id: '02383876-ae00-4095-a828-2c2c7053711c',
  recipient_id: '16080449-8a3d-4c7c-a79e-5cee98eb245e',
};

export const DELIVERY_EMPYT_REQ: DeliveryRequestModel = {
  id: null,
  product: null,
  deliveryman_id: null,
  recipient_id: null,
};

export const DELIVERY_NOT_ID_REQ: DeliveryRequestModel = {
  id: null,
  product: 'teste teste',
  deliveryman_id: '02383876-ae00-4095-a828-2c2c7053711c',
  recipient_id: '16080449-8a3d-4c7c-a79e-5cee98eb245e',
};

export const DELIVERY_RES: DeliveryViewModel = {
  id: '3edf5dfe-5d4b-4f98-a1ad-0c04023cc980',
  product: 'produto 1x',
  start_date: new Date('2021-04-28T01:43:06.000Z'),
  end_date: null,
  canceled_at: null,
  delivery_status_id: '6f83ae1a-040d-4fd7-8598-9639e4555235',
  recipient_id: '6d692023-6352-4e61-8a0d-710d465eaef2',
  deliveryman_id: '58253b07-4a6b-4eba-b456-130462a6183a',
  created_at: new Date('2021-04-28T01:12:32.913Z'),
  updated_at: new Date('2021-04-28T01:13:22.000Z'),
  recipient: {
    id: '6d692023-6352-4e61-8a0d-710d465eaef2',
    name: 'Dedrick Heidenreich',
    street: 'Franecki Square',
    address_number: 39194,
    complement: 'Apt. 475',
    state: 'Dashawn Island',
    city: 'Lelandfurt',
    zipcode: '97525',
    created_at: new Date('2021-04-28T00:37:48.848Z'),
    updated_at: new Date('2021-04-28T00:37:48.848Z'),
  },
  deliveryman: {
    id: '58253b07-4a6b-4eba-b456-130462a6183a',
    name: 'Vidal Gulgowski',
    email: 'lucius.rippin@gmail.com',
    created_at: new Date('2021-04-28T00:37:48.848Z'),
    updated_at: new Date('2021-04-28T00:37:48.848Z'),
  },
  delivery_status: {
    id: '6f83ae1a-040d-4fd7-8598-9639e4555235',
    name: 'WITHDRAWAL',
    description: 'RETIRADA',
    primary_color: '#4D85EE',
    segudary_color: '#BAD2FF',
    value_status: 1,
    created_at: new Date('2021-04-28T00:37:48.848Z'),
    updated_at: new Date('2021-04-28T00:37:48.848Z'),
  },
};

export const DELIVERY_RES_null: DeliveryViewModel = null;

export const DELIVERIES_RES: DeliveryViewModel[] = [
  {
    id: '3edf5dfe-5d4b-4f98-a1ad-0c04023cc980',
    product: 'produto 1x',
    start_date: new Date('2021-04-28T01:43:06.000Z'),
    end_date: null,
    canceled_at: null,
    delivery_status_id: '6f83ae1a-040d-4fd7-8598-9639e4555235',
    recipient_id: '6d692023-6352-4e61-8a0d-710d465eaef2',
    deliveryman_id: '58253b07-4a6b-4eba-b456-130462a6183a',
    created_at: new Date('2021-04-28T01:12:32.913Z'),
    updated_at: new Date('2021-04-28T01:13:22.000Z'),
    recipient: {
      id: '6d692023-6352-4e61-8a0d-710d465eaef2',
      name: 'Dedrick Heidenreich',
      street: 'Franecki Square',
      address_number: 39194,
      complement: 'Apt. 475',
      state: 'Dashawn Island',
      city: 'Lelandfurt',
      zipcode: '97525',
      created_at: new Date('2021-04-28T00:37:48.848Z'),
      updated_at: new Date('2021-04-28T00:37:48.848Z'),
    },
    deliveryman: {
      id: '58253b07-4a6b-4eba-b456-130462a6183a',
      name: 'Vidal Gulgowski',
      email: 'lucius.rippin@gmail.com',
      created_at: new Date('2021-04-28T00:37:48.848Z'),
      updated_at: new Date('2021-04-28T00:37:48.848Z'),
    },
    delivery_status: {
      id: '6f83ae1a-040d-4fd7-8598-9639e4555235',
      name: 'WITHDRAWAL',
      description: 'RETIRADA',
      primary_color: '#4D85EE',
      segudary_color: '#BAD2FF',
      value_status: 1,
      created_at: new Date('2021-04-28T00:37:48.848Z'),
      updated_at: new Date('2021-04-28T00:37:48.848Z'),
    },
  },
  {
    id: 'be0e777a-a5d3-4999-8969-e826f31627a9',
    product: 'produto 2x',
    start_date: new Date('2021-04-28T01:43:06.000Z'),
    end_date: null,
    canceled_at: null,
    delivery_status_id: '6f83ae1a-040d-4fd7-8598-9639e4555235',
    recipient_id: '6d692023-6352-4e61-8a0d-710d465eaef2',
    deliveryman_id: '44114a75-e79b-43ce-af44-67d5c2deb46b',
    created_at: new Date('2021-04-28T01:12:46.405Z'),
    updated_at: new Date('2021-04-30T02:25:29.648Z'),
    recipient: {
      id: '6d692023-6352-4e61-8a0d-710d465eaef2',
      name: 'Dedrick Heidenreich',
      street: 'Franecki Square',
      address_number: 39194,
      complement: 'Apt. 475',
      state: 'Dashawn Island',
      city: 'Lelandfurt',
      zipcode: '97525',
      created_at: new Date('2021-04-28T01:12:46.405Z'),
      updated_at: new Date('2021-04-30T02:25:29.648Z'),
    },
    deliveryman: {
      id: '44114a75-e79b-43ce-af44-67d5c2deb46b',
      name: 'Zena Becker',
      email: 'neha_barton@hotmail.com',
      created_at: new Date('2021-04-28T01:12:46.405Z'),
      updated_at: new Date('2021-04-30T02:25:29.648Z'),
    },
    delivery_status: {
      id: '6f83ae1a-040d-4fd7-8598-9639e4555235',
      name: 'WITHDRAWAL',
      description: 'RETIRADA',
      primary_color: '#4D85EE',
      segudary_color: '#BAD2FF',
      value_status: 1,
      created_at: new Date('2021-04-28T01:12:46.405Z'),
      updated_at: new Date('2021-04-30T02:25:29.648Z'),
    },
  },
];
