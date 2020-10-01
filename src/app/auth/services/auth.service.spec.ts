import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { EnvApiService } from 'src/app/shared/services/http/env-api.service';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
describe('AuthService', () => {
  let service: AuthService;
  beforeEach(() => {
    const envApiServiceStub = () => ({ getApiAuth: () => ({}) });
    const routerStub = () => ({ navigate: array => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        AuthService,
        { provide: EnvApiService, useFactory: envApiServiceStub },
        { provide: Router, useFactory: routerStub }
      ]
    });
    service = TestBed.get(AuthService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const routerStub: Router = TestBed.get(Router);
      spyOn(routerStub, 'navigate').and.callThrough();
      service.logout();
      expect(routerStub.navigate).toHaveBeenCalled();
    });
  });
});
