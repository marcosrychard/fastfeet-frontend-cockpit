import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/delivery/services/delivery.service';
import { DeliveryEffects } from './delivery.effects';
describe('DeliveryEffects', () => {
  let service: DeliveryEffects;
  beforeEach(() => {
    const actionsStub = () => ({});
    const routerStub = () => ({});
    const deliveryServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        DeliveryEffects,
        { provide: Actions, useFactory: actionsStub },
        { provide: Router, useFactory: routerStub },
        { provide: DeliveryService, useFactory: deliveryServiceStub }
      ]
    });
    service = TestBed.get(DeliveryEffects);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
