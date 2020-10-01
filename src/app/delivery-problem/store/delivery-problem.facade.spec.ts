import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { DeliveryProblemFacade } from './delivery-problem.facade';
describe('DeliveryProblemFacade', () => {
  let service: DeliveryProblemFacade;
  beforeEach(() => {
    const storeStub = () => ({ dispatch: arg => ({}) });
    TestBed.configureTestingModule({
      providers: [
        DeliveryProblemFacade,
        { provide: Store, useFactory: storeStub }
      ]
    });
    service = TestBed.get(DeliveryProblemFacade);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
