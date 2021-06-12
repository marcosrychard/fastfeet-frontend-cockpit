import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { JwtInterceptor } from './jwt.interceptor.helpers';

describe('JwtInterceptor', () => {
  let service: JwtInterceptor;
  let toastrServiceSpy: jasmine.SpyObj<ToastrService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);
    toastrServiceSpy = jasmine.createSpyObj('ToastrService', ['error']);

    TestBed.configureTestingModule({
      providers: [
        JwtInterceptor,
        { provide: Router, useValue: routerSpy },
        { provide: ToastrService, useValue: toastrServiceSpy },
      ],
    });
    service = TestBed.inject(JwtInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
