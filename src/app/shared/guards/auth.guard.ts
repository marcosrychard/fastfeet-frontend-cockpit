import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';
import { TypeUserEnum } from '../enums/type-user.enum';
import { ToastrService } from 'ngx-toastr';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanLoad, CanActivate {

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
    const { ADMIN, USER } = TypeUserEnum
    const dataUser = this.authService.getDataUserStorage();

    const result = !!(dataUser?.user?.roles.find((role: any) => role === ADMIN || role === USER) ?? false)

    if (!result || !dataUser) {
      this.toastr.error('Esta funcionalidade é restrita ao seu perfil', 'Opa :(');
      this.authService.logout();
      return false;
    }

    return true;
  }
}
