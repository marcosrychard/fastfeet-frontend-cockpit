import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LocalStorageUtils } from './localstorage.helpers';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private toastr: ToastrService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {

      if (err.status === 401) {
        LocalStorageUtils.removeDataUserStorage();
        location.reload(true);
      }

      if (err.status === 403) {
        this.toastr.error('Esta funcionalidade é restrita ao seu perfil', 'Opa :(');
      }

      const error = err.error || err.statusText;

      if (err.statusText === 'Unknown Error') {
        this.toastr.error('Erro ao conectar ao servidor por favor tente novamente mais tarde', 'Opa :(');
      }

      return throwError(error);
    }))
  }
}
