import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageUtils } from '../localstorage.helpers';

@Injectable({
  providedIn: 'root',
})
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private toastr: ToastrService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err) => {
        if (err.status === 401) {
          LocalStorageUtils.removeDataUserStorage();
          this.router.navigateByUrl('/');
        }

        if (err.status === 403) {
          this.toastr.error(
            'Esta funcionalidade é restrita ao seu perfil',
            'Opa :('
          );
        }

        const error = err.error || err.statusText;

        if (err.statusText === 'Unknown Error') {
          this.toastr.error(
            'Erro ao conectar ao servidor por favor tente novamente mais tarde',
            'Opa :('
          );
        }

        return throwError(error);
      })
    );
  }
}
