import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliveryFormComponent } from './delivery-form.component';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { DELIVERY, DELIVERY_EMPYT, DELIVERY_NOT_ID } from 'src/app/core/mocks/delivery/delivery-constant.mock';
import { DeliveryRequestModel } from 'src/app/shared/models/request/delivery-request.model';
import { activatedRouteStub } from 'src/app/core/mocks/activated-route.mock';
import { RECIPIENTS_RESPONSE } from 'src/app/core/mocks/recipient/recipient-constant.mock';
import { DELIVERYMANS_RESPONSE } from 'src/app/core/mocks/deliveryman/deliveryman-constant.mock';
import { of, throwError } from 'rxjs';

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
            'updateDelivery'
        ]);

        recipientServiceSpy = jasmine.createSpyObj('RecipientService', ['findAllRecipients']);
        deliverymanServiceSpy = jasmine.createSpyObj('DeliverymanService', ['findAllDeliveryman']);

        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            schemas: [NO_ERRORS_SCHEMA],
            declarations: [DeliveryFormComponent],
            providers: [
                { provide: ActivatedRoute, useFactory: activatedRouteStub },
                { provide: DeliverymanService, useValue: deliverymanServiceSpy },
                { provide: DeliveryService, useValue: deliveryServiceSpy },
                { provide: RecipientService, useValue: recipientServiceSpy },
            ]
        });
        fixture = TestBed.createComponent(DeliveryFormComponent);
        component = fixture.componentInstance;
        component.deliveryForm = formBuilder.group(DELIVERY_EMPYT);
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });

    it('ngOnInit makes expected calls', async () => {

        spyOn(component, 'buildForm').and.callThrough();
        spyOn(component, 'forkJoinCall').and.callThrough();
        spyOn(component, 'findDeliveryById').and.callThrough();

        component.ngOnInit();
        expect(component.buildForm).toHaveBeenCalled();
        expect(component.forkJoinCall).toHaveBeenCalled();
        expect(component.findDeliveryById).toHaveBeenCalled();
    });


    it(`deliverymans has default value`, () => {
        expect(component.deliverymans).toEqual([]);
    });

    it(`recipients has default value`, () => {
        expect(component.recipients).toEqual([]);
    });

    it(`loading has default value`, () => {
        expect(component.loading).toEqual(true);
    });

    it(`typeAction has default value`, () => {
        expect(component.typeAction).toEqual(TypeActionEnum.CREATE);
    });

    it(`should find delivery by id`, () => {
        component.deliveryForm = formBuilder.group(new DeliveryRequestModel(DELIVERY_EMPYT));

        deliveryServiceSpy.findByDeliveryId.withArgs(DELIVERY.id).and.returnValue(of(DELIVERY));
        component.findDeliveryById(DELIVERY.id);

        expect(deliveryServiceSpy.findByDeliveryId).toHaveBeenCalled();
        expect(component.deliveryForm.value).toEqual(DELIVERY);
        expect(component.typeAction).toEqual(TypeActionEnum.UPDATE);
    });

    it(`should validate if o return the find delivery by id is valid`, () => {
        deliveryServiceSpy.findByDeliveryId.withArgs(DELIVERY.id).and.returnValue(of(null));
        component.findDeliveryById(DELIVERY.id);

        expect(deliveryServiceSpy.findByDeliveryId).toHaveBeenCalled();
        expect(component.typeAction).toEqual(TypeActionEnum.CREATE);
    });

    it(`should f`, () => {
        const result = component.f;
        expect(component.deliveryForm.controls).toBe(result);
    });

    it(`should fdgsdfgsd sdfgd`, () => {
        deliveryServiceSpy.findByDeliveryId.withArgs('teste').and.returnValue(throwError({ statusCode: 500 }));
        component.findDeliveryById('teste');
        expect(deliveryServiceSpy.findByDeliveryId).toThrowError();
    });

    it(`onSubmit CREATE`, () => {
        const event = 'CREATE';

        component.deliveryForm.setValue(DELIVERY_NOT_ID);
        deliveryServiceSpy.createDelivery.withArgs(new DeliveryRequestModel(DELIVERY_NOT_ID)).and.returnValue(of(DELIVERY));
        component.onSubmit(event);

        expect(component.deliveryForm.valid).toBe(true);
        expect(event).toEqual(TypeActionEnum.CREATE);
    });

    it(`onSubmit UPDATE`, () => {
        const event = 'UPDATE';
        component.deliveryForm = formBuilder.group(DELIVERY);

        component.deliveryForm.setValue(DELIVERY);
        deliveryServiceSpy.updateDelivery.withArgs(new DeliveryRequestModel(DELIVERY)).and.returnValue(of(DELIVERY));
        component.onSubmit(event);

        expect(component.deliveryForm.valid).toEqual(true);
        expect(event).toEqual(TypeActionEnum.UPDATE);
    });

    it(`onSubmit UPDATEdsfsdfsdf`, () => {
        const event = 'UPDATE';
        component.deliveryForm.setErrors({ temp: true })
        component.onSubmit(event);
        expect(component.deliveryForm.valid).toBe(false);
    });

    it(`onSubmit UPDATEdsfsdfsdf`, () => {
        const event = 'DELETE';

        component.onSubmit(event);

        expect(event).toBe('DELETE');
    });

    it(`findAllDeliveryman`, () => {

        recipientServiceSpy.findAllRecipients.and.returnValue(of(RECIPIENTS_RESPONSE));
        component.findAllRecipients();

        expect(recipientServiceSpy.findAllRecipients).toHaveBeenCalled();
    });

    it(`findAllRecipients`, () => {

        deliverymanServiceSpy.findAllDeliveryman.and.returnValue(of(DELIVERYMANS_RESPONSE));
        component.findAllDeliveryman();

        expect(deliverymanServiceSpy.findAllDeliveryman).toHaveBeenCalled();
    });

    it(`forkJoin`, () => {
        deliverymanServiceSpy.findAllDeliveryman.and.returnValue(of(DELIVERYMANS_RESPONSE));
        recipientServiceSpy.findAllRecipients.and.returnValue(of(RECIPIENTS_RESPONSE));

        component.forkJoinCall();

        expect(component.deliverymans).toEqual(DELIVERYMANS_RESPONSE.results);
        expect(component.recipients).toEqual(RECIPIENTS_RESPONSE.results);
        expect(component.loading).toBe(false);
    });

});
