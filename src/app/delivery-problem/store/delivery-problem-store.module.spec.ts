import { TestBed } from '@angular/core/testing';
import { DeliveryProblemStoreModule } from './delivery-problem-store.module';
describe('DeliveryProblemStoreModule', () => {
  let pipe: DeliveryProblemStoreModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DeliveryProblemStoreModule] });
    pipe = TestBed.get(DeliveryProblemStoreModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
