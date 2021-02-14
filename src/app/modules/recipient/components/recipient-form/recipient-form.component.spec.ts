import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RecipientFormComponent } from './recipient-form.component';
import { TypeActionEnum } from 'src/app/core/enums/type-action.enum';

describe('RecipientFormComponent', () => {
  let component: RecipientFormComponent;
  let fixture: ComponentFixture<RecipientFormComponent>;

  beforeEach(() => {
    const formBuilderStub = () => ({ group: object => ({}) });
    const routerStub = () => ({});
    const activatedRouteStub = () => ({});

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RecipientFormComponent],
      providers: [
        { provide: FormBuilder, useFactory: formBuilderStub },
        { provide: Router, useFactory: routerStub },
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
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
    expect(component.typeAction).toEqual(TypeActionEnum.CREATE);
  });
});
