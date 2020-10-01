import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as DeliveryProblemSelectors from "./selectors/delivery-problem.selectors";
import * as DeliveryProblemActions from "./actions/delivery-problem.actions";
import { IState } from "./states/delivery-problem.state";

@Injectable({
  providedIn: "root",
})
export class DeliveryProblemFacade {
  loading = this.store.pipe(select(DeliveryProblemSelectors.FIND_IS_LOADING));
  datas = this.store.pipe(select(DeliveryProblemSelectors.FIND_DELIVERY_PROBLEM));

  constructor(private store: Store<IState>) {}

  load(params = {}) {
    this.store.dispatch(DeliveryProblemActions.FIND_ALL_REQUEST({ payload: params }));
  }

  // create(data: any) {
  //   this.store.dispatch(DeliveryProblemActions.CREATE_REQUEST({ payload: data }));
  // }

  // update(data: Todo) {
  //   this.store.dispatch(DeliveryProblemActions.update({ data }));
  // }

  // remove(id: string) {
  //   this.store.dispatch(DeliveryProblemActions.remove({ id }));
  // }
}
