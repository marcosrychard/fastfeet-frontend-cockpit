import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DeliverymanFacade } from '../../store/deliveryman.facade';
import { ActivatedRoute } from '@angular/router';
import { DeliverymanFormComponent } from './deliveryman-form.component';
import { TypeActionEnum } from 'src/app/shared/enums/type-action.enum';

describe('DeliverymanFormComponent', () => {
  let component: DeliverymanFormComponent;
  let fixture: ComponentFixture<DeliverymanFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });

    const deliverymanFacadeStub = () => ({
      update: data => ({}),
      create: arg => ({}),
      loadById: id => ({}),
      datas: { subscribe: f => f({}) }
    });

    const activatedRouteStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliverymanFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: DeliverymanFacade, useFactory: deliverymanFacadeStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub }
      ]
    });
    fixture = TestBed.createComponent(DeliverymanFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`loading has default value`, () => {
    expect(component.loading).toEqual(true);
  });

  it(`type_action has default value`, () => {
    expect(component.type_action).toEqual(TypeActionEnum.CREATE);
  });
});
