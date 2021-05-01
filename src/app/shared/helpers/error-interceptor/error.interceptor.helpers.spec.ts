import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorInterceptor } from './error.interceptor.helpers';

describe('ErrorInterceptor', () => {
  let service: ErrorInterceptor;

  beforeEach(() => {
    const toastrServiceStub = () => ({ error: (string, string1) => ({}) });
    const routerStub = () => ({ navigateByUrl: (string) => ({}) });

    TestBed.configureTestingModule({
      providers: [
        ErrorInterceptor,
        { provide: ToastrService, useFactory: toastrServiceStub },
        { provide: Router, useFactory: routerStub },
      ],
    });
    service = TestBed.inject(ErrorInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub = {} as any;
      const httpHandlerStub = {} as any;
      const toastrServiceStub: ToastrService = TestBed.inject(ToastrService);
      const routerStub: Router = TestBed.inject(Router);

      spyOn(httpHandlerStub, 'handle').and.callThrough();
      spyOn(toastrServiceStub, 'error').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();

      service.intercept(httpRequestStub, httpHandlerStub);

      expect(httpHandlerStub.handle).toHaveBeenCalled();
      expect(toastrServiceStub.error).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
});
