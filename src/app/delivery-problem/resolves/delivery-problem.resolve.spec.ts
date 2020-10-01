import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DeliveryProblemService } from '../services/delivery-problem.service';
import { DeliveryProblemResolve } from './delivery-problem.resolve';
describe('DeliveryProblemResolve', () => {
  let service: DeliveryProblemResolve;
  beforeEach(() => {
    const activatedRouteSnapshotStub = () => ({});
    const deliveryProblemServiceStub = () => ({
      findAllDeliveryProblems: () => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        DeliveryProblemResolve,
        {
          provide: ActivatedRouteSnapshot,
          useFactory: activatedRouteSnapshotStub
        },
        {
          provide: DeliveryProblemService,
          useFactory: deliveryProblemServiceStub
        }
      ]
    });
    service = TestBed.get(DeliveryProblemResolve);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = TestBed.get(
        ActivatedRouteSnapshot
      );
      const deliveryProblemServiceStub: DeliveryProblemService = TestBed.get(
        DeliveryProblemService
      );
      spyOn(
        deliveryProblemServiceStub,
        'findAllDeliveryProblems'
      ).and.callThrough();
      service.resolve(activatedRouteSnapshotStub);
      expect(
        deliveryProblemServiceStub.findAllDeliveryProblems
      ).toHaveBeenCalled();
    });
  });
});
