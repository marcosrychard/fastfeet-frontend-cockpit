import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, throwError } from 'rxjs';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { MockActivatedRoute } from 'src/app/core/mocks/activated-route.mock';
import {
  DELIVERY_EMPYT_REQ,
  DELIVERY_NOT_ID_REQ,
  DELIVERY_RES,
  DELIVERY_RES_null,
  DELIVERY_VALID_REQ,
  FORM_BUILDER_DELIVERY,
} from 'src/app/core/mocks/delivery/delivery.dummy';
import { DELIVERYMANS_PAGINATOR_RES } from 'src/app/core/mocks/deliveryman/deliveryman.dummy';
import { RECIPIENTS_PAGINATOR_RES } from 'src/app/core/mocks/recipient/recipient.dummy';
import { DeliveryRequestModel } from 'src/app/shared/models/request/delivery-request.model';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';
import { DeliveryFormComponent } from './delivery-form.component';

describe('DeliveryFormComponent', () => {
  const formBuilder = new FormBuilder();

  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;
  let deliveryServiceSpy: jasmine.SpyObj<DeliveryService>;
  let deliverymanServiceSpy: jasmine.SpyObj<DeliverymanService>;
  let recipientServiceSpy: jasmine.SpyObj<RecipientService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: MockActivatedRoute;

  beforeEach(() => {
    deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'findByDeliveryId',
      'createDelivery',
      'updateDelivery',
      'forkJoinCall',
    ]);

    activatedRouteSpy = new MockActivatedRoute();

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    recipientServiceSpy = jasmine.createSpyObj('RecipientService', [
      'findAllRecipients',
    ]);

    deliverymanServiceSpy = jasmine.createSpyObj('DeliverymanService', [
      'findAllDeliveryman',
    ]);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [DeliveryFormComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: RecipientService, useValue: recipientServiceSpy },
        { provide: DeliverymanService, useValue: deliverymanServiceSpy },
        { provide: DeliveryService, useValue: deliveryServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    component.deliveryForm = formBuilder.group(FORM_BUILDER_DELIVERY);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const id = '37D25CA8-B48C-417B-9CCF-C311BF8F515B';

      activatedRouteSpy.setParameter(id);
      component.id = activatedRouteSpy.snapshot.params.id;

      spyOn(component, 'buildForm');
      spyOn(component, 'forkJoinCall');
      spyOn(component, 'findDeliveryById');

      component.ngOnInit();

      expect(component.id).toBe(id);
      expect(component.buildForm).toHaveBeenCalled();
      expect(component.forkJoinCall).toHaveBeenCalled();
      expect(component.findDeliveryById).toHaveBeenCalledWith(component.id);
    });
  });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      spyOn(component.subscriptions, 'unsubscribe');

      component.ngOnDestroy();

      expect(component.subscriptions.unsubscribe).toHaveBeenCalled();
    });
  });

  describe('goList', () => {
    it('should redirect to delivery list  page ', () => {
      const path = '/panel/delivery/list';

      component.goList();

      expect(routerSpy.navigate).toHaveBeenCalledWith([path]);
    });
  });

  describe('findDeliveryById', () => {
    it('makes expected calls', () => {
      deliveryServiceSpy.findByDeliveryId.and.returnValues(throwError('error'));

      component.findDeliveryById('teste');

      expect(component.loadingDelivery).toBe(false);
    });
  });

  describe('createDelivery', () => {
    it('should call service to create delivery ', () => {
      const deliveryReq = new DeliveryRequestModel(DELIVERY_NOT_ID_REQ);

      deliveryServiceSpy.createDelivery.and.returnValue(of(DELIVERY_RES));

      component.createDelivery(deliveryReq);

      expect(deliveryServiceSpy.createDelivery).toHaveBeenCalledWith(
        deliveryReq
      );
    });
  });

  describe('updateDelivery', () => {
    it('should call service to update delivery ', () => {
      const deliveryReq = new DeliveryRequestModel(DELIVERY_VALID_REQ);

      deliveryServiceSpy.updateDelivery.and.returnValue(of(DELIVERY_RES));

      component.updateDelivery(deliveryReq);

      expect(deliveryServiceSpy.updateDelivery).toHaveBeenCalledWith(
        deliveryReq
      );
    });
  });

  describe('forkJoinCall', () => {
    it('should call service findAllDeliveryman and findAllRecipients width sucess', () => {
      const DELIVERYMANS = DELIVERYMANS_PAGINATOR_RES;
      const RECIPIENTS = RECIPIENTS_PAGINATOR_RES;
      component.loading = true;

      recipientServiceSpy.findAllRecipients.and.returnValue(of(RECIPIENTS));
      deliverymanServiceSpy.findAllDeliveryman.and.returnValue(
        of(DELIVERYMANS)
      );

      component.forkJoinCall();

      expect(component.deliveryManResponseModel).toEqual(DELIVERYMANS);
      expect(component.recipientResponseModel).toEqual(RECIPIENTS);
      expect(component.loading).toBe(false);
    });

    it('should call service findAllDeliveryman and findAllRecipients width error', () => {
      component.loading = true;
      recipientServiceSpy.findAllRecipients.and.returnValue(throwError({}));
      deliverymanServiceSpy.findAllDeliveryman.and.returnValue(throwError({}));

      component.forkJoinCall();

      expect(component.loading).toBe(false);
    });
  });

  describe('onSubmit', () => {
    it('should create delivery if form is valid', () => {
      component.deliveryForm.setValue(DELIVERY_NOT_ID_REQ);

      spyOn(component, 'goList');
      spyOn(component, 'createDelivery');

      component.onSubmit(TypeActionEnum.CREATE);

      expect(component.deliveryForm.controls.id.value).toBe(null);
      expect(component.deliveryForm.valid).toBe(true);
      expect(component.goList).toHaveBeenCalled();
      expect(component.createDelivery).toHaveBeenCalled();
    });

    it('should update delivery if form is valid', () => {
      component.deliveryForm.setValue(DELIVERY_VALID_REQ);

      spyOn(component, 'goList');
      spyOn(component, 'updateDelivery');

      component.onSubmit(TypeActionEnum.UPDATE);

      expect(component.deliveryForm.controls.id.value).toBeTruthy();
      expect(component.deliveryForm.valid).toBe(true);
      expect(component.goList).toHaveBeenCalled();
      expect(component.updateDelivery).toHaveBeenCalled();
    });

    it('should check if form is valid', () => {
      component.deliveryForm.setValue(DELIVERY_EMPYT_REQ);

      component.onSubmit('');

      expect(component.deliveryForm.invalid).toBeTruthy();
    });
  });

  describe('buildForm', () => {
    it('makes expected calls', () => {
      component.buildForm();

      expect(component.deliveryForm).toBeTruthy();
    });
  });

  describe('findDeliveryById', () => {
    it('should call service findDeliveryById with success', () => {
      const id = 'teste';

      deliveryServiceSpy.findByDeliveryId
        .withArgs(id)
        .and.returnValue(of(DELIVERY_RES));

      component.findDeliveryById(id);

      expect(component.typeAction).toBe(TypeActionEnum.UPDATE);
      expect(component.loadingDelivery).toBe(false);
      expect(deliveryServiceSpy.findByDeliveryId).toHaveBeenCalledWith(id);
    });

    it('should call service findDeliveryById with id equal null', () => {
      const id = null;

      deliveryServiceSpy.findByDeliveryId
        .withArgs(id)
        .and.returnValue(of(DELIVERY_RES));

      component.findDeliveryById(id);

      expect(deliveryServiceSpy.findByDeliveryId).not.toHaveBeenCalledWith(id);
    });

    it('should call service findDeliveryById with response null', () => {
      const id = 'teste';

      deliveryServiceSpy.findByDeliveryId
        .withArgs(id)
        .and.returnValue(of(DELIVERY_RES_null));

      component.findDeliveryById(id);

      expect(component.loadingDelivery).toBe(false);
      expect(deliveryServiceSpy.findByDeliveryId).toHaveBeenCalledWith(id);
    });
  });
});
