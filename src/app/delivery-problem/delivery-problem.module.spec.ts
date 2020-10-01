import { TestBed } from '@angular/core/testing';
import { DeliveryProblemModule } from './delivery-problem.module';
describe('DeliveryProblemModule', () => {
  let pipe: DeliveryProblemModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliveryProblemModule] });
    pipe = TestBed.get(DeliveryProblemModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
