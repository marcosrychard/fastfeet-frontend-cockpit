import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { DeliveryProblemService } from '../services/delivery-problem.service';

@Injectable({
  providedIn: "root"
})
export class DeliveryProblemResolve implements Resolve<any> {
  constructor(private deliveryProblemService: DeliveryProblemService) {}

  resolve(route: ActivatedRouteSnapshot) {
    // route.params.param
    return this.deliveryProblemService.findAllDeliveryProblems();
  }
}
