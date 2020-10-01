import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DeliveryProblemResolve } from "src/app/delivery-problem/resolves/delivery-problem.resolve";
import { DeliveryProblemListComponent } from "src/app/delivery-problem/components/delivery-problem-list/delivery-problem-list.component";

const DeliveryProblemRoutes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  {
    path: "list",
    component: DeliveryProblemListComponent,
    resolve: {
      deliveryProblems: DeliveryProblemResolve,
    },
    data: {
      roles: [],
      claims: [],
    },
  },
  { path: "**", redirectTo: "list" },
];

@NgModule({
  imports: [RouterModule.forChild(DeliveryProblemRoutes)],
  exports: [RouterModule],
})
export class DeliveryProblemRoutingModule {}
