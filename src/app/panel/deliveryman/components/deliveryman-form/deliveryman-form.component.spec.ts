import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { MockActivatedRoute } from 'src/app/core/mocks/activated-route.mock';
import { FORM_BUILDER_DELIVERYMAN } from 'src/app/core/mocks/deliveryman/deliveryman.dummy';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { DeliverymanFormComponent } from './deliveryman-form.component';

describe('DeliverymanFormComponent', () => {
  const formBuilder = new FormBuilder();

  let component: DeliverymanFormComponent;
  let fixture: ComponentFixture<DeliverymanFormComponent>;

  let activatedRouteSpy: MockActivatedRoute;
  let routerSpy: jasmine.SpyObj<Router>;
  let deliverymanServiceSpy: jasmine.SpyObj<DeliverymanService>;

  beforeEach(() => {
    activatedRouteSpy = new MockActivatedRoute();

    deliverymanServiceSpy = jasmine.createSpyObj('DeliverymanService', [
      'findAllDeliveryman',
    ]);

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [DeliverymanFormComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DeliverymanService, useValue: deliverymanServiceSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliverymanFormComponent);
    component = fixture.componentInstance;
    component.deliverymanForm = formBuilder.group(FORM_BUILDER_DELIVERYMAN);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`loading has default value`, () => {
    expect(component.loading).toEqual(true);
  });

  it(`typeAction has default value`, () => {
    expect(component.typeAction).toEqual(TypeActionEnum.CREATE);
  });
});
