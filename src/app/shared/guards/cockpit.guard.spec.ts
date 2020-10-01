import { TestBed } from '@angular/core/testing';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { CockpitGuard } from './cockpit.guard';
describe('CockpitGuard', () => {
  let service: CockpitGuard;
  beforeEach(() => {
    const authServiceStub = () => ({ getDataUserStorage: () => ({}) });
    const toastrServiceStub = () => ({ error: (string, string1) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        CockpitGuard,
        { provide: AuthService, useFactory: authServiceStub },
        { provide: ToastrService, useFactory: toastrServiceStub }
      ]
    });
    service = TestBed.get(CockpitGuard);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
