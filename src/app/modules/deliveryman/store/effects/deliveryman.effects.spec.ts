import { TestBed } from '@angular/core/testing';
import { Actions } from '@ngrx/effects';
import { Router } from '@angular/router';
import { DeliverymanService } from '../../../../shared/services/deliveryman/deliveryman.service';
import { DeliverymanEffects } from './deliveryman.effects';

describe('DeliverymanEffects', () => {
  let service: DeliverymanEffects;

  beforeEach(() => {
    const actionsStub = () => ({});
    const routerStub = () => ({});
    const deliverymanServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        DeliverymanEffects,
        { provide: Actions, useFactory: actionsStub },
        { provide: Router, useFactory: routerStub },
        { provide: DeliverymanService, useFactory: deliverymanServiceStub }
      ]
    });
    service = TestBed.inject(DeliverymanEffects);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
