import { TestBed } from '@angular/core/testing';
import { DeliverymanStoreModule } from './deliveryman-store.module';
describe('DeliverymanStoreModule', () => {
  let pipe: DeliverymanStoreModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliverymanStoreModule] });
    pipe = TestBed.get(DeliverymanStoreModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
