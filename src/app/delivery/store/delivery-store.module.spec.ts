import { TestBed } from '@angular/core/testing';
import { DeliveryStoreModule } from './delivery-store.module';
describe('DeliveryStoreModule', () => {
  let pipe: DeliveryStoreModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliveryStoreModule] });
    pipe = TestBed.get(DeliveryStoreModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
