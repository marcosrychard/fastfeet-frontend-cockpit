import { DeliveryManViewModel } from '../view-models/deliveryman.view-model';
import { MetaViewModel } from '../view-models/meta.view-model';

export class DeliveryManPaginatorResponseModel {
  data: DeliveryManViewModel[];
  meta: MetaViewModel;

  constructor(data: DeliveryManPaginatorResponseModel) {
    this.data = data.data;
    this.meta = data.meta;
  }
}
