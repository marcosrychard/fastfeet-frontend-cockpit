import { MetaViewModel } from '../view-models/meta.view-model';
import { RecipientViewModel } from '../view-models/recipient-view-model';

export class RecipientPaginatorResponseModel {
  data: RecipientViewModel[];
  meta: MetaViewModel;

  constructor(data: RecipientPaginatorResponseModel) {
    this.data = data.data;
    this.meta = data.meta;
  }
}
