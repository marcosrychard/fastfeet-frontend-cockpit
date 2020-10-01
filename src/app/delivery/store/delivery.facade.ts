import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as DeliverySelectors from "./selectors/delivery.selectors";
import * as DeliveryActions from "./actions/delivery.actions";
import { IState } from "./states/delivery.state";

@Injectable({
  providedIn: "root",
})
export class DeliveryFacade {
  loading = this.store.pipe(select(DeliverySelectors.FIND_IS_LOADING));
  datas = this.store.pipe(select(DeliverySelectors.FIND_DELIVERY));

  constructor(private store: Store<IState>) {}

  load(payload = {}) {
    this.store.dispatch(DeliveryActions.FIND_ALL_REQUEST({ payload }));
  }

  loadById(payload: number) {
    this.store.dispatch(DeliveryActions.FIND_BY_ID_REQUEST({ payload }));
  }

  create(payload: any) {
    this.store.dispatch(DeliveryActions.CREATE_REQUEST({ payload }));
  }

  update(payload: any) {
    this.store.dispatch(DeliveryActions.UPDATE_REQUEST({ payload }));
  }

  // remove(id: string) {
  //   this.store.dispatch(DeliveryActions.remove({ id }));
  // }
}
