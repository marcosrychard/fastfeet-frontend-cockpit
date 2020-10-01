import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SigninComponent } from "./components/signin/signin.component";

const AuthRoutes: Routes = [
  { path: "", redirectTo: "signin", pathMatch: "full" },
  {
    path: "signin",
    component: SigninComponent,
  },
  { path: "**", redirectTo: "signin" },
];

@NgModule({
  imports: [RouterModule.forChild(AuthRoutes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }
