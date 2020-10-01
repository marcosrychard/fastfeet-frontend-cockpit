import { ComponentFixture, TestBed, async, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { By } from "@angular/platform-browser";
import { ActivatedRoute } from '@angular/router';
import { RecipientService } from 'src/app/recipient/services/recipient.service';
import { DeliverymanService } from 'src/app/deliveryman/services/deliveryman.service';
import { FormBuilder } from '@angular/forms';
import { DeliveryFacade } from '../../store/delivery.facade';
import { DeliveryFormComponent } from './delivery-form.component';
import { TypeActionEnum } from 'src/app/shared/enums/type-action.enum';

describe('DeliveryFormComponent', () => {
  let component: DeliveryFormComponent;

  let fixture: ComponentFixture<DeliveryFormComponent>;

  const formBuilder: FormBuilder = new FormBuilder();

  beforeEach(async(() => {

    const activatedRouteStub = () => ({
      snapshot: {
        params: {},
      }
    });

    const recipientServiceStub = () => ({ findAllRecipients: () => ({}) });

    const deliverymanServiceStub = () => ({ findAllDeliveryman: () => ({}) });

    const formBuilderStub = () => ({ group: object => ({}) });

    const deliveryFacadeStub = () => ({});

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryFormComponent],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: RecipientService, useFactory: recipientServiceStub },
        { provide: DeliverymanService, useFactory: deliverymanServiceStub },
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: DeliveryFacade, useFactory: deliveryFacadeStub },
        { provide: FormBuilder, useValue: formBuilder }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;


    component.deliveryForm = formBuilder.group({
      product: null,
      deliveryman_id: null,
      recipient_id: null,
    });


    component.ngOnInit();
    fixture.detectChanges();
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it('should render input elements', () => {

    const compiled = fixture.debugElement.nativeElement;
    const product = compiled.querySelector('#product');
    const deliveryman_id = compiled.querySelector('#deliveryman_id');
    const recipient_id = compiled.querySelector('#recipient_id');

    expect(product).toBeTruthy();
    expect(deliveryman_id).toBeTruthy();
    expect(recipient_id).toBeTruthy();

  });

  it(`form should be invalidg`, () => {
    component.deliveryForm.controls['product'].setValue('')
    component.deliveryForm.controls['deliveryman_id'].setValue('')
    component.deliveryForm.controls['recipient_id'].setValue('')

    expect(component.deliveryForm.valid).toBeFalsy()
  })

  it(`form should be valid`, () => {
    component.deliveryForm.controls['product'].setValue('teste')
    component.deliveryForm.controls['deliveryman_id'].setValue(1)
    component.deliveryForm.controls['recipient_id'].setValue(1)

    expect(component.deliveryForm.valid).toBeTruthy()
  })

  it(`form update`, () => {

    // Arrange
    const nativeElement = (name: string) => (fixture.debugElement.query(By.css(name)).nativeElement)
    const inputElementProduct = nativeElement('#product');
    const inputElementDeliveryman_id = nativeElement('#deliveryman_id');
    const inputElementRecipient_id = nativeElement('#recipient_id');
    const { id, product, deliveryman_id, recipient_id } = component.deliveryForm.controls;

    const delivery = {
      id: '4CD0', product: 'teste', deliveryman_id: '93E1', recipient_id: '497B'
    }

    component.type_action = TypeActionEnum.UPDATE;

    // Act
    id.setValue(delivery.id);
    product.setValue(delivery.product);
    deliveryman_id.setValue(delivery.deliveryman_id);
    recipient_id.setValue(delivery.recipient_id);

    inputElementProduct.value = product.value
    inputElementDeliveryman_id.value = deliveryman_id.value
    inputElementRecipient_id.value = recipient_id.value

    // Assert
    expect(component.deliveryForm.valid).toBeTruthy();
    expect(component.type_action).toBe(TypeActionEnum.UPDATE);
    expect(component.deliveryForm.value).toEqual(delivery);
    expect(inputElementProduct.value).toContain(product.value)
    expect(inputElementDeliveryman_id.value).toContain(deliveryman_id.value)
    expect(inputElementRecipient_id.value).toContain(recipient_id.value)
  })

  it(`teste method UPDATE`, () => {

    // Arrange
    const event = TypeActionEnum.UPDATE;

    const saySomethingSpy = spyOn(component, 'update');

    const delivery = {
      id: '4CD0', product: 'teste', deliveryman_id: '93E1', recipient_id: '497B'
    }

    component.deliveryForm.setValue(delivery)
    component.onSubmit(event)

    expect(component.deliveryForm.valid).toBeTruthy()
    expect(saySomethingSpy).toHaveBeenCalled();
    expect(event).toBe(TypeActionEnum.UPDATE);

  })

  it(`teste method`, () => {

    // Arrange
    const event = TypeActionEnum.CREATE;

    const saySomethingSpy = spyOn(component, 'create');

    component.deliveryForm.controls['product'].setValue('teste')
    component.deliveryForm.controls['deliveryman_id'].setValue('93E1')
    component.deliveryForm.controls['recipient_id'].setValue('497B')

    component.onSubmit(event)

    expect(component.deliveryForm.valid).toBeTruthy()
    expect(saySomethingSpy).toHaveBeenCalled();
    expect(event).toBe(TypeActionEnum.CREATE);

  })

});
