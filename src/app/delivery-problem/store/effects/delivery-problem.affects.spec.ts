import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { DeliveryProblemService } from '../../services/delivery-problem.service';
import { DeliveryProblemEffects } from './delivery-problem.affects';
describe('DeliveryProblemEffects', () => {
  let service: DeliveryProblemEffects;
  beforeEach(() => {
    const actionsStub = () => ({});
    const deliveryProblemServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        DeliveryProblemEffects,
        { provide: Actions, useFactory: actionsStub },
        {
          provide: DeliveryProblemService,
          useFactory: deliveryProblemServiceStub
        }
      ]
    });
    service = TestBed.get(DeliveryProblemEffects);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
