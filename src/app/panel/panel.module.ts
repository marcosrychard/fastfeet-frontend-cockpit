import { NgModule } from '@angular/core';
import { PermissionsDirective } from '../shared/directive/permissions/permissions.directive';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { MaterialModule } from '../shared/material.module';
import { SharedModule } from '../shared/shared.module';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent, ToolbarComponent, PermissionsDirective],
  imports: [PanelRoutingModule, SharedModule, MaterialModule],
})
export class PanelModule {}
