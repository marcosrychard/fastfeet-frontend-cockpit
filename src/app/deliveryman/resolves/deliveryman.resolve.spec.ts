import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DeliverymanService } from '../services/deliveryman.service';
import { DeliverymanResolve } from './deliveryman.resolve';
describe('DeliverymanResolve', () => {
  let service: DeliverymanResolve;
  beforeEach(() => {
    const activatedRouteSnapshotStub = () => ({});
    const deliverymanServiceStub = () => ({ findAllDeliveryman: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        DeliverymanResolve,
        {
          provide: ActivatedRouteSnapshot,
          useFactory: activatedRouteSnapshotStub
        },
        { provide: DeliverymanService, useFactory: deliverymanServiceStub }
      ]
    });
    service = TestBed.get(DeliverymanResolve);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = TestBed.get(
        ActivatedRouteSnapshot
      );
      const deliverymanServiceStub: DeliverymanService = TestBed.get(
        DeliverymanService
      );
      spyOn(deliverymanServiceStub, 'findAllDeliveryman').and.callThrough();
      service.resolve(activatedRouteSnapshotStub);
      expect(deliverymanServiceStub.findAllDeliveryman).toHaveBeenCalled();
    });
  });
});
