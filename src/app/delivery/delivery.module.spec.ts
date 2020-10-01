import { TestBed } from '@angular/core/testing';
import { DeliveryModule } from './delivery.module';
describe('DeliveryModule', () => {
  let pipe: DeliveryModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliveryModule] });
    pipe = TestBed.get(DeliveryModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
