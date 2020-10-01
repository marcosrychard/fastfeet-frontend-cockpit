import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as DeliverySelectors from "./selectors/delivery.selectors";
import * as DeliverymanActions from "./actions/deliveryman.actions";
import { IState } from "./states/deliveryman.state";

@Injectable({
  providedIn: "root",
})
export class DeliverymanFacade {
  loading = this.store.pipe(select(DeliverySelectors.FIND_IS_LOADING));
  datas = this.store.pipe(select(DeliverySelectors.FIND_DELIVERYMAN));

  constructor(private store: Store<IState>) {}

  loadById(payload: number) {
    this.store.dispatch(DeliverymanActions.FIND_BY_ID_REQUEST({ payload }));
  }

  load(payload = {}) {
    this.store.dispatch(DeliverymanActions.FIND_ALL_REQUEST({ payload }));
  }

  create(payload: any) {
    this.store.dispatch(DeliverymanActions.CREATE_REQUEST({ payload }));
  }

  update(payload: any) {
    this.store.dispatch(DeliverymanActions.UPDATE_REQUEST({ payload }));
  }

  // remove(id: string) {
  //   this.store.dispatch(DeliveryActions.remove({ id }));
  // }
}
