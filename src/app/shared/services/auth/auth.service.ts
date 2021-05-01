import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { LocalStorageUtils } from 'src/app/shared/helpers/localstorage.helpers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url: string;

  constructor(private httpClient: HttpClient, private router: Router) {
    this.url = environment.BASE_URL + environment.AUTH;
  }

  public signin(data: any) {
    return this.httpClient.post(this.url + '/signin', data).pipe(
      tap((user) => {
        this.router.navigate(['/panel']);
        this.setDataUsertorage(user);
      })
    );
  }

  public logout() {
    LocalStorageUtils.removeDataUserStorage();
    this.router.navigate(['/']);
  }

  public getDataUserStorage() {
    return LocalStorageUtils.getDataUserStorage();
  }

  public setDataUsertorage(user: any) {
    LocalStorageUtils.setDataUsertorage(user);
  }
}
