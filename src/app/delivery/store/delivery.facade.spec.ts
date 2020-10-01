import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { DeliveryFacade } from './delivery.facade';
describe('DeliveryFacade', () => {
  let service: DeliveryFacade;
  beforeEach(() => {
    const storeStub = () => ({ dispatch: arg => ({}) });
    TestBed.configureTestingModule({
      providers: [DeliveryFacade, { provide: Store, useFactory: storeStub }]
    });
    service = TestBed.get(DeliveryFacade);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
