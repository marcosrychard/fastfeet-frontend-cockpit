import { Injectable, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class PermissionsService {
  public permissionsLocal: string[] = [];
  public permissionsDatabase: string[] = [];

  constructor(private authService: AuthService) {}

  public addPermission(permission: string | string[]) {
    if (Array.isArray(permission)) {
      return (this.permissionsLocal = permission);
    }

    this.permissionsLocal = [permission];
  }

  public loadPermissionsLocal() {
    return this.permissionsLocal;
  }

  public loadPermissionsDatabase(): string[] {
    const data = this.authService.getDataUserStorage();

    return (this.permissionsDatabase = data?.user?.claims ?? []);
  }

  public isEmpty(data: string | string[]) {
    if (!data || (Array.isArray(data) && data.length === 0)) {
      return true;
    }

    return false;
  }

  public hasPermissions(local: string | string[]) {
    const database = this.loadPermissionsDatabase();

    return Array.isArray(local)
      ? this.preparePermissions(local, database)
      : this.preparePermission(local, database);
  }

  public preparePermission(local: string, database: string[]) {
    const result = this.convertPermissions([local], database);

    return result && !!result.database.includes(local);
  }

  public preparePermissions(local: string[], database: string[]) {
    const result = this.convertPermissions(local, database);

    return (
      result &&
      !!result.local.filter((claim) => result.database.includes(claim)).length
    );
  }

  public convertPermissions(local: any[], database: string[]) {
    if (local.length && database.length) {
      return {
        local: this.arrayObjectToArrayString(local),
        database,
      };
    }

    return {
      local: [],
      database: [],
    };
  }

  public arrayObjectToArrayString(local: any[]) {
    return local.map((claim) => Object.values(claim).toString());
  }
}
