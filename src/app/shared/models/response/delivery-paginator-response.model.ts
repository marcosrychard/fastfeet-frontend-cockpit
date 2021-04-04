import { DeliveryViewModel } from '../view-models/delivery.view-model';
import { MetaViewModel } from '../view-models/meta.view-model';

export class DeliveryPaginatorResponseModel {
  data: DeliveryViewModel[];
  meta: MetaViewModel;

  constructor(data: DeliveryPaginatorResponseModel) {
    this.data = data.data;
    this.meta = data.meta;
  }
}
