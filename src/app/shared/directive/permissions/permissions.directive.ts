import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PermissionsService } from './permissions.service';

@Directive({
  selector: '[appPermissions]',
})
export class PermissionsDirective {
  @Input() set appPermissions(permissions: string | string[]) {
    this.permissionsService.hasPermissions(permissions)
      ? this.viewContainer.createEmbeddedView(this.templateRef)
      : this.viewContainer.clear();
  }

  constructor(
    private permissionsService: PermissionsService,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
