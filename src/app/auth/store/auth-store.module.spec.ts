import { TestBed } from '@angular/core/testing';
import { SigninStoreModule } from './auth-store.module';
describe('SigninStoreModule', () => {
  let pipe: SigninStoreModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SigninStoreModule] });
    pipe = TestBed.get(SigninStoreModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
