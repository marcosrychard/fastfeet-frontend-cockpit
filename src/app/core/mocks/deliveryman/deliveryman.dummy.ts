import { Validators } from '@angular/forms';
import { DeliveryManPaginatorResponseModel } from 'src/app/shared/models/response/deliveryman-paginator-response.model';


export const FORM_BUILDER_DELIVERYMAN = {
  id: [null],
  product: [null, Validators.required],
  deliveryman_id: [null, Validators.required],
  recipient_id: [null, Validators.required],
};

export const DELIVERYMANS_PAGINATOR_RES = new DeliveryManPaginatorResponseModel(
  {
    data: [
      {
        id: '02383876-ae00-4095-a828-2c2c7053711c',
        name: 'Shania Bednar',
        email: 'leta.bernier@hotmail.com',
        created_at: new Date('2021-01-31T07:23:34.425Z'),
        updated_at: new Date('2021-01-31T07:23:34.425Z'),
      },
      {
        id: '05ddae7d-d3f6-47a0-be8f-48b92e8e3d68',
        name: 'Justus Schumm',
        email: 'jocelyn_mckenzie47@gmail.com',
        created_at: new Date('2021-01-31T07:23:34.425Z'),
        updated_at: new Date('2021-01-31T07:23:34.425Z'),
      },
    ],
    meta: {
      currentPage: 0,
      itemsPerPage: 1,
      totalItems: 2,
      totalPages: 2,
      next: true,
      previous: false,
    },
  }
);
