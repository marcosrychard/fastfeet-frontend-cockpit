import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { AuthService } from '../../services/auth.service';
import { SigninEffects } from './auth.effects';
describe('SigninEffects', () => {
  let service: SigninEffects;
  beforeEach(() => {
    const actionsStub = () => ({});
    const authServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        SigninEffects,
        { provide: Actions, useFactory: actionsStub },
        { provide: AuthService, useFactory: authServiceStub }
      ]
    });
    service = TestBed.get(SigninEffects);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});