import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as RecipientSelectors from "./selectors/recipient.selectors";
import * as RecipientActions from "./actions/recipient.actions";
import { IState } from "./states/recipient.state";

@Injectable({
  providedIn: "root",
})
export class RecipientFacade {
  loading = this.store.pipe(select(RecipientSelectors.FIND_IS_LOADING));
  datas = this.store.pipe(select(RecipientSelectors.FIND_RECIPIENTS));

  constructor(private store: Store<IState>) { }

  load(params = {}) {
    this.store.dispatch(RecipientActions.FIND_ALL_REQUEST({ payload: params }));
  }

  loadById(payload: number) {
    this.store.dispatch(RecipientActions.FIND_BY_ID_REQUEST({ payload }));
  }

  create(payload: any) {
    this.store.dispatch(RecipientActions.CREATE_REQUEST({ payload }));
  }

  update(payload: any) {
    this.store.dispatch(RecipientActions.UPDATE_REQUEST({ payload }));
  }

  // remove(id: string) {
  //   this.store.dispatch(RecipientActions.remove({ id }));
  // }
}
