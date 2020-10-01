import { TestBed } from '@angular/core/testing';
import { DeliveryProblemRoutingModule } from './delivery-problem-routing.module';
describe('DeliveryProblemRoutingModule', () => {
  let pipe: DeliveryProblemRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryProblemRoutingModule]
    });
    pipe = TestBed.get(DeliveryProblemRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
