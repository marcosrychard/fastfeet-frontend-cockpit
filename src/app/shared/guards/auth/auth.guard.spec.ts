import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let service: AuthGuard;

  beforeEach(() => {
    const authServiceStub = () => ({
      getDataUserStorage: () => ({}),
      logout: () => ({})
    });
    const toastrServiceStub = () => ({ error: (string, string1) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        AuthGuard,
        { provide: AuthService, useFactory: authServiceStub },
        { provide: ToastrService, useFactory: toastrServiceStub }
      ]
    });
    service = TestBed.inject(AuthGuard);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
