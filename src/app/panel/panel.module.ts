import { NgModule } from '@angular/core';
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { ClaimsDirective } from '../shared/directives/claims/claims.directive';
import { MaterialSharedModule } from '../shared/material-shared.module';
import { SharedModule } from '../shared/shared.module';
import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';

@NgModule({
  declarations: [PanelComponent, ToolbarComponent, ClaimsDirective],
  imports: [PanelRoutingModule, SharedModule, MaterialSharedModule],
})
export class PanelModule {}
