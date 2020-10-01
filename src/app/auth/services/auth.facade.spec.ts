import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { AuthService } from './auth.service';
import { AuthFacade } from './auth.facade';
describe('AuthFacade', () => {
  let service: AuthFacade;
  beforeEach(() => {
    const storeStub = () => ({ dispatch: arg => ({}) });
    const authServiceStub = () => ({
      logout: () => ({}),
      getDataUserStorage: () => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        AuthFacade,
        { provide: Store, useFactory: storeStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    service = TestBed.get(AuthFacade);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('logout', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = TestBed.get(AuthService);
      spyOn(authServiceStub, 'logout').and.callThrough();
      service.logout();
      expect(authServiceStub.logout).toHaveBeenCalled();
    });
  });
  describe('getDataUserStorage', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = TestBed.get(AuthService);
      spyOn(authServiceStub, 'getDataUserStorage').and.callThrough();
      service.getDataUserStorage();
      expect(authServiceStub.getDataUserStorage).toHaveBeenCalled();
    });
  });
});
