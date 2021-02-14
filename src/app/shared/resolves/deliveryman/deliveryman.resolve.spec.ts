import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DeliverymanService } from '../../services/deliveryman/deliveryman.service';
import { DeliverymanResolve } from './deliveryman.resolve';

describe('DeliverymanResolve', () => {
  let service: DeliverymanResolve;

  beforeEach(() => {
    const deliverymanServiceStub = () => ({ findAllDeliveryman: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        DeliverymanResolve,
        { provide: DeliverymanService, useFactory: deliverymanServiceStub }
      ]
    });
    service = TestBed.inject(DeliverymanResolve);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = {} as any;
      const deliverymanServiceStub = TestBed.inject(DeliverymanService);

      spyOn(deliverymanServiceStub, 'findAllDeliveryman').and.callThrough();

      service.resolve(activatedRouteSnapshotStub);

      expect(deliverymanServiceStub.findAllDeliveryman).toHaveBeenCalled();
    });
  });
});
