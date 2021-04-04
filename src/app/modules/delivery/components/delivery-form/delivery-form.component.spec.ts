import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { activatedRouteStub } from 'src/app/core/mocks/activated-route.mock';
import {
  DELIVERY_EMPYT
} from 'src/app/core/mocks/delivery/delivery-constant.mock';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';
import { DeliveryFormComponent } from './delivery-form.component';

describe('DeliveryFormComponent', () => {
  const formBuilder = new FormBuilder();

  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;
  let deliveryServiceSpy: jasmine.SpyObj<DeliveryService>;
  let recipientServiceSpy: jasmine.SpyObj<RecipientService>;
  let deliverymanServiceSpy: jasmine.SpyObj<DeliverymanService>;

  beforeEach(() => {
    deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'findByDeliveryId',
      'createDelivery',
      'updateDelivery',
    ]);

    recipientServiceSpy = jasmine.createSpyObj('RecipientService', [
      'findAllRecipients',
    ]);
    deliverymanServiceSpy = jasmine.createSpyObj('DeliverymanService', [
      'findAllDeliveryman',
    ]);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryFormComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: DeliverymanService, useValue: deliverymanServiceSpy },
        { provide: DeliveryService, useValue: deliveryServiceSpy },
        { provide: RecipientService, useValue: recipientServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    component.deliveryForm = formBuilder.group(DELIVERY_EMPYT);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
