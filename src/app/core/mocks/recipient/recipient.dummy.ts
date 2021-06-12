import { Validators } from '@angular/forms';
import { RecipientPaginatorResponseModel } from 'src/app/shared/models/response/recipient-response.model';

export const FORM_BUILDER_RECIPIENT = {
  id: [''],
  name: ['', Validators.required],
  street: ['', Validators.required],
  address_number: ['', Validators.required],
  complement: ['', Validators.required],
  zipcode: ['', Validators.required],
  state: ['', Validators.required],
  city: ['', Validators.required],
};

export const RECIPIENTS_PAGINATOR_RES = new RecipientPaginatorResponseModel({
  data: [
    {
      id: '16080449-8a3d-4c7c-a79e-5cee98eb245e',
      name: 'Gaylord Runte',
      street: 'Lemke Lock',
      address_number: 47438,
      complement: 'Suite 832',
      state: 'Darrin Ranch',
      city: 'Naderton',
      zipcode: '24302',
      created_at: new Date('2021-02-01T03:11:55.051Z'),
      updated_at: new Date('2021-02-01T03:11:55.051Z'),
    },
    {
      id: '212c04c6-539c-4f4f-8fdc-c00d597b613d',
      name: 'Veda Barrows',
      street: 'Electa Estates',
      address_number: 87388,
      complement: 'Suite 385',
      state: 'Jacklyn Knolls',
      city: 'Darionfurt',
      zipcode: '98651-1168',
      created_at: new Date('2021-02-01T03:11:55.051Z'),
      updated_at: new Date('2021-02-01T03:11:55.051Z'),
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
});
