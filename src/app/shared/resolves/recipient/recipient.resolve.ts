

import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { RecipientService } from '../../services/recipient/recipient.service';

@Injectable({
  providedIn: 'root'
})
export class RecipientResolve implements Resolve<any> {
  constructor(private recipientService: RecipientService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // route.params.param
    return this.recipientService.findAllRecipients();
  }
}
