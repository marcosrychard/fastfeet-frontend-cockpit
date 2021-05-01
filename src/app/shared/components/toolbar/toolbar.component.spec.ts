import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { ToolbarClaimsHash } from 'src/app/core/claims-hash/toolbar-claims.hash';
import { RouterTestingModule } from '@angular/router/testing';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(() => {
    const authServiceStub = () => ({
      getDataUserStorage: () => ({}),
      logout: () => ({})
    });
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ToolbarComponent],
      providers: [{ provide: AuthService, useFactory: authServiceStub }]
    });
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`claims has default value`, () => {
    expect(component.claims).toEqual(ToolbarClaimsHash);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getDataUserStorage').and.callThrough();
      component.ngOnInit();
      expect(component.getDataUserStorage).toHaveBeenCalled();
    });
  });

  describe('getDataUserStorage', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'getDataUserStorage').and.callThrough();
      component.getDataUserStorage();
      expect(authServiceStub.getDataUserStorage).toHaveBeenCalled();
    });
  });

  describe('logout', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'logout').and.callThrough();
      component.logout();
      expect(authServiceStub.logout).toHaveBeenCalled();
    });
  });
});
