import { NgModule } from '@angular/core';
import { CockpitComponent } from './cockpit.component';
import { DefaultModule } from '../../shared/modules/default.module';
import { ToolbarModule } from '../../core/layout/toolbar/toolbar.module';
import { CockpitRoutingModule } from './cockpit-routing.module';
import { HomeComponent } from '../../core/layout/home/home.component';

@NgModule({
  declarations: [CockpitComponent, HomeComponent],
  imports: [DefaultModule, ToolbarModule, CockpitRoutingModule],
})
export class CockpitModule {}
