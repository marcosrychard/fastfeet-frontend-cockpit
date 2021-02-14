import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { DeliverymanService } from '../../services/deliveryman/deliveryman.service';

@Injectable({
  providedIn: 'root'
})
export class DeliverymanResolve implements Resolve<any> {
  constructor(private deliverymanService: DeliverymanService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // route.params.param
    return this.deliverymanService.findAllDeliveryman();
  }
}
