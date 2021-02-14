import { Injectable } from '@angular/core';
import { CanLoad, CanActivate } from '@angular/router';
import { TypeUserEnum } from '../../../core/enums/type-user.enum';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class CockpitGuard implements CanLoad, CanActivate {

  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { }

  canLoad(): boolean {
    return this.isAuthorized();
  }

  canActivate(): boolean {
    return this.isAuthorized();
  }

  private isAuthorized() {
    const dataUser = this.authService.getDataUserStorage();

    const result = !!(dataUser?.user?.roles.find((role: any) => role === TypeUserEnum.ADMIN) ?? false);

    if (!result || !dataUser) {
      this.toastr.error('Esta funcionalidade é restrita ao seu perfil', 'Opa :(');
      return false;
    }

    return true;
  }
}
