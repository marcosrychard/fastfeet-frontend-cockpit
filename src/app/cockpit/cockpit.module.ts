import { NgModule } from "@angular/core";
import { CockpitComponent } from "./cockpit.component";
import { DefaultModule } from "../shared/modules/default.module";
import { ToolbarModule } from "../shared/components/layout/toolbar/toolbar.module";
import { CockpitRoutingModule } from "./cockpit-routing.module";
import { HomeComponent } from '../shared/components/layout/home/home.component';

@NgModule({
  declarations: [CockpitComponent,HomeComponent],
  imports: [DefaultModule, ToolbarModule, CockpitRoutingModule],
})
export class CockpitModule {}
