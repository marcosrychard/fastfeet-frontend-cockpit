import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DeliverymanDialogsService } from '../../../../shared/services/deliveryman/deliveryman-dialogs.service';
import { displayedColumns } from '../../../../core/constants/deliveryman.constant';
import { DeliverymanListComponent } from './deliveryman-list.component';

describe('DeliverymanListComponent', () => {
  let component: DeliverymanListComponent;
  let fixture: ComponentFixture<DeliverymanListComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { data: { deliverymans: {}, claims: {} } },
    });
    const routerStub = () => ({ navigate: (array) => ({}) });
    const deliverymanDialogsServiceStub = () => ({
      confirm: (string, string1) => ({ subscribe: (f) => f({}) }),
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliverymanListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        {
          provide: DeliverymanDialogsService,
          useFactory: deliverymanDialogsServiceStub,
        },
      ],
    });
    fixture = TestBed.createComponent(DeliverymanListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`displayedColumns has default value`, () => {
    expect(component.displayedColumns).toEqual(displayedColumns);
  });

  it(`dataSource has default value`, () => {
    expect(component.deliveryman).toEqual([]);
  });

  it(`claims has default value`, () => {
    expect(component.claims).toEqual([]);
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      const deliverymanDialogsServiceStub = fixture.debugElement.injector.get(
        DeliverymanDialogsService
      );
      spyOn(deliverymanDialogsServiceStub, 'confirm').and.callThrough();
      component.openDialog();
      expect(deliverymanDialogsServiceStub.confirm).toHaveBeenCalled();
    });
  });
});
