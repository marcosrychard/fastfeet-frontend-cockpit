import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ErrorInterceptor } from './error.interceptor.helpers';

describe('ErrorInterceptor', () => {
  let service: ErrorInterceptor;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);

    TestBed.configureTestingModule({
      providers: [
        ErrorInterceptor,
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
      ],
    });
    service = TestBed.inject(ErrorInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
