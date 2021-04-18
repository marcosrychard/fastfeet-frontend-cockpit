import { DeliveryProblemViewModel } from '../view-models/delivery-problem-paginator.view-model';
import { MetaViewModel } from '../view-models/meta.view-model';

export class DeliveryProblemPaginatorResponseModel {
  data: DeliveryProblemViewModel[];
  meta: MetaViewModel;

  constructor(data: DeliveryProblemPaginatorResponseModel) {
    this.data = data.data;
    this.meta = data.meta;
  }
}
