import { TestBed } from '@angular/core/testing';
import { DeliverymanRoutingModule } from './deliveryman-routing.module';
describe('DeliverymanRoutingModule', () => {
  let pipe: DeliverymanRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliverymanRoutingModule] });
    pipe = TestBed.get(DeliverymanRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
