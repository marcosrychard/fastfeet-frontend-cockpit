import { NgModule } from '@angular/core';
import { CockpitComponent } from './cockpit.component';
import { DefaultModule } from '../../core/modules/default.module';
import { ToolbarModule } from '../auth/components/layout/toolbar/toolbar.module';
import { CockpitRoutingModule } from './cockpit-routing.module';
import { HomeComponent } from '../auth/components/layout/home/home.component';

@NgModule({
  declarations: [CockpitComponent, HomeComponent],
  imports: [DefaultModule, ToolbarModule, CockpitRoutingModule],
})
export class CockpitModule {}
