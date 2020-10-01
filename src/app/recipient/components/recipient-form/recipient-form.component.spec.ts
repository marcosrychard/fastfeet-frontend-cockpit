import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecipientFacade } from '../../store/recipient.facade';
import { RecipientFormComponent } from './recipient-form.component';
import { TypeActionEnum } from 'src/app/shared/enums/type-action.enum';

describe('RecipientFormComponent', () => {
  let component: RecipientFormComponent;
  let fixture: ComponentFixture<RecipientFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });

    const routerStub = () => ({});

    const activatedRouteStub = () => ({});

    const recipientFacadeStub = () => ({
      update: data => ({}),
      create: arg => ({}),
      loadById: id => ({}),
      datas: { subscribe: f => f({}) }
    });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RecipientFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: RecipientFacade, useFactory: recipientFacadeStub }
      ]
    });
    fixture = TestBed.createComponent(RecipientFormComponent);
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
