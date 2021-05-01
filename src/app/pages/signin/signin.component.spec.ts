import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthFacade } from '../../shared/services/auth/auth.facade';
import { AuthService } from '../../shared/services/auth/auth.service';
import { SigninComponent } from './signin.component';
describe('SigninComponent', () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const routerStub = () => ({ navigate: array => ({}) });
    const authFacadeStub = () => ({
      getDataUserStorage: () => ({}),
      signin: arg => ({}),
      errors: { subscribe: f => f({}) }
    });
    const authServiceStub = () => ({ logout: () => ({}) });
    const toastrServiceStub = () => ({ error: (arg, string) => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [SigninComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: Router, useFactory: routerStub },
        { provide: AuthFacade, useFactory: authFacadeStub },
        { provide: AuthService, useFactory: authServiceStub },
        { provide: ToastrService, useFactory: toastrServiceStub }
      ]
    });
    fixture = TestBed.createComponent(SigninComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`loading has default value`, () => {
    expect(component.loading).toEqual(true);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const authServiceStub: AuthService = fixture.debugElement.injector.get(
        AuthService
      );
      spyOn(authServiceStub, 'logout').and.callThrough();
      component.ngOnInit();
      expect(authServiceStub.logout).toHaveBeenCalled();
    });
  });
});
