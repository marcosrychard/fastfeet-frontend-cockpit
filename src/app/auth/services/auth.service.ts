import { Injectable } from '@angular/core';
import { EnvApiService } from 'src/app/shared/services/http/env-api.service';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LocalStorageUtils } from 'src/app/shared/helpers/localstorage.helpers';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(
    private httpClient: HttpClient,
    private envApiService: EnvApiService,
    private router: Router
  ) { }


  public signin(data: any) {
    return this.httpClient.post(this.envApiService.getApiAuth(), data)
      .pipe(
        tap((user) => this.router.navigate(["/cockpit"]) && this.setDataUsertorage(user))
      );
  }

  public logout() {
    LocalStorageUtils.removeDataUserStorage()
    this.router.navigate(["/"])
  }

  public getDataUserStorage() {
    return LocalStorageUtils.getDataUserStorage()
  }

  public setDataUsertorage(user: any) {
    LocalStorageUtils.setDataUsertorage(user)
  }
}

