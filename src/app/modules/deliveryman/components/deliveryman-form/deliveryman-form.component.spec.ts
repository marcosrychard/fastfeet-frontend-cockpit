import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';
import { DeliverymanFormComponent } from './deliveryman-form.component';

describe('DeliverymanFormComponent', () => {
  let component: DeliverymanFormComponent;
  let fixture: ComponentFixture<DeliverymanFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: (object) => ({}) });
    const deliverymanFacadeStub = () => ({
      update: (data) => ({}),
      create: (arg) => ({}),
      loadById: (id) => ({}),
      datas: { subscribe: (f) => f({}) },
    });
    const activatedRouteStub = () => ({});
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliverymanFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
      ],
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

  it(`typeAction has default value`, () => {
    expect(component.typeAction).toEqual(TypeActionEnum.CREATE);
  });
});
