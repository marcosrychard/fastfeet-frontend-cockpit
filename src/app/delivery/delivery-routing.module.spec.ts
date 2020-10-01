import { TestBed } from '@angular/core/testing';
import { DeliveryRoutingModule } from './delivery-routing.module';
describe('DeliveryRoutingModule', () => {
  let pipe: DeliveryRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliveryRoutingModule] });
    pipe = TestBed.get(DeliveryRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
