import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { DeliveryService } from "../services/delivery.service";

@Injectable({
  providedIn: "root"
})
export class DeliveryResolve implements Resolve<any> {
  constructor(private deliveryService: DeliveryService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // route.params.param
    return this.deliveryService.findAllDeliveries();
  }
}
