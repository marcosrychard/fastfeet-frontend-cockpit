import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DeliveryService } from '../services/delivery.service';
import { DeliveryResolve } from './delivery.resolve';
describe('DeliveryResolve', () => {
  let service: DeliveryResolve;
  beforeEach(() => {
    const activatedRouteSnapshotStub = () => ({});
    const deliveryServiceStub = () => ({ findAllDeliveries: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        DeliveryResolve,
        {
          provide: ActivatedRouteSnapshot,
          useFactory: activatedRouteSnapshotStub
        },
        { provide: DeliveryService, useFactory: deliveryServiceStub }
      ]
    });
    service = TestBed.get(DeliveryResolve);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = TestBed.get(
        ActivatedRouteSnapshot
      );
      const deliveryServiceStub: DeliveryService = TestBed.get(DeliveryService);
      spyOn(deliveryServiceStub, 'findAllDeliveries').and.callThrough();
      service.resolve(activatedRouteSnapshotStub);
      expect(deliveryServiceStub.findAllDeliveries).toHaveBeenCalled();
    });
  });
});
