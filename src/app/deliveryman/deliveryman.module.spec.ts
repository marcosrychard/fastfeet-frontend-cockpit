import { TestBed } from '@angular/core/testing';
import { DeliverymanModule } from './deliveryman.module';
describe('DeliverymanModule', () => {
  let pipe: DeliverymanModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliverymanModule] });
    pipe = TestBed.get(DeliverymanModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
