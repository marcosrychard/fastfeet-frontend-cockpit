import { DeliveryStatusViewModel } from '../view-models/delivery-status.view-model';
import { MetaViewModel } from '../view-models/meta.view-model';

export class DeliveryStatusPaginatorResponseModel {
  data: DeliveryStatusViewModel[];
  meta: MetaViewModel;

  constructor(data: DeliveryStatusPaginatorResponseModel) {
    this.data = data.data;
    this.meta = data.meta;
  }
}
