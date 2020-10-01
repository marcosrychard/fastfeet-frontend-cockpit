import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from './shared/guards/auth.guard';


const routes: Routes = [
  { path: "", redirectTo: "auth", pathMatch: "full" },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "cockpit",
    loadChildren: () => import("./cockpit/cockpit.module").then((m) => m.CockpitModule), canLoad: [AuthGuard], canActivate: [AuthGuard]
  },
  { path: "**", redirectTo: "auth" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
