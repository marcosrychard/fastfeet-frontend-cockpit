import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DeliveryProblemService } from '../../services/delivery-problem/delivery-problem.service';
import { DeliveryProblemResolve } from './delivery-problem.resolve';

describe('DeliveryProblemResolve', () => {
  let service: DeliveryProblemResolve;

  beforeEach(() => {
    const deliveryProblemServiceStub = () => ({
      findAllDeliveryProblems: () => ({})
    });

    TestBed.configureTestingModule({
      providers: [
        DeliveryProblemResolve,
        {
          provide: DeliveryProblemService,
          useFactory: deliveryProblemServiceStub
        }
      ]
    });

    service = TestBed.inject(DeliveryProblemResolve);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = {} as any;
      const deliveryProblemServiceStub = TestBed.inject(DeliveryProblemService);

      spyOn(deliveryProblemServiceStub, 'findAllDeliveryProblems').and.callThrough();

      service.resolve(activatedRouteSnapshotStub);
      expect(deliveryProblemServiceStub.findAllDeliveryProblems).toHaveBeenCalled();
    });
  });
});
