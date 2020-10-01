import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DeliveryDialogsService } from '../../services/delivery-dialogs.service';
import { ClaimService } from 'src/app/shared/services/claims/claim.service';
import { displayedColumns } from '../../constants/delivery.constant';
import { DeliveryListComponent } from './delivery-list.component';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });

    const routerStub = () => ({ navigate: array => ({}) });

    const deliveryDialogsServiceStub = () => ({
      confirm: (string, string1) => ({ subscribe: f => f({}) })
    });

    const claimServiceStub = () => ({ checkHasClaim: claims => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        {
          provide: DeliveryDialogsService,
          useFactory: deliveryDialogsServiceStub
        },
        { provide: ClaimService, useFactory: claimServiceStub }
      ]
    });

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`displayedColumns has default value`, () => {
    expect(component.displayedColumns).toEqual(displayedColumns);
  });

  it(`dataSource has default value`, () => {
    expect(component.dataSource).toEqual([]);
  });

  it(`claims has default value`, () => {
    expect(component.claims).toEqual(`ADMIN`);
  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const claimServiceStub = fixture.debugElement.injector.get(ClaimService);

      spyOn(component, 'findAllDeliveries').and.callThrough();

      spyOn(claimServiceStub, 'checkHasClaim').and.callThrough();

      component.ngOnInit();

      expect(component.findAllDeliveries).toHaveBeenCalled();

      expect(claimServiceStub.checkHasClaim).toHaveBeenCalled();
    });
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      const deliveryDialogsServiceStub = fixture.debugElement.injector.get(DeliveryDialogsService);

      spyOn(deliveryDialogsServiceStub, 'confirm').and.callThrough();

      component.openDialog();

      expect(deliveryDialogsServiceStub.confirm).toHaveBeenCalled();
    });
  });
});
