import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { DeliverymanFacade } from './deliveryman.facade';
describe('DeliverymanFacade', () => {
  let service: DeliverymanFacade;
  beforeEach(() => {
    const storeStub = () => ({ dispatch: arg => ({}) });
    TestBed.configureTestingModule({
      providers: [DeliverymanFacade, { provide: Store, useFactory: storeStub }]
    });
    service = TestBed.get(DeliverymanFacade);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
