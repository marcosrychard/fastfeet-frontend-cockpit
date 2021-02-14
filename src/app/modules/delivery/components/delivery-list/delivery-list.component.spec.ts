import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DeliveryDialogsService } from '../../../../shared/services/delivery/delivery-dialogs.service';
import { ClaimService } from 'src/app/shared/services/claims/claim.service';
import { displayedColumns } from '../../../../core/constants/delivery.constant';
import { DeliveryListComponent } from './delivery-list.component';
import { of } from 'rxjs';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;
  let deliveryDialogsServiceSpy: jasmine.SpyObj<DeliveryDialogsService>;
  let claimServiceSpy: jasmine.SpyObj<ClaimService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });


    deliveryDialogsServiceSpy = jasmine.createSpyObj('DeliveryDialogsService', ['confirm']);
    claimServiceSpy = jasmine.createSpyObj('ClaimService', ['checkHasClaim']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate'])

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useValue: routerSpy },
        {
          provide: DeliveryDialogsService, useValue: deliveryDialogsServiceSpy
        },
        { provide: ClaimService, useValue: claimServiceSpy }
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

  it('goForm', () => {
    const data = { id: 'teste' };

    component.goForm(data);

    expect(routerSpy.navigate).toHaveBeenCalledWith(['/cockpit/delivery/form/' + data.id]);

  });

  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'findAllDeliveries').and.callThrough();
      claimServiceSpy.checkHasClaim.and.callThrough();

      component.ngOnInit();

      expect(component.findAllDeliveries).toHaveBeenCalled();
      expect(claimServiceSpy.checkHasClaim).toHaveBeenCalled();
    });
  });

  describe('openDialog', () => {
    it('makes expected calls', () => {
      deliveryDialogsServiceSpy.confirm.and.returnValue(of(true));

      component.openDialog();

      expect(deliveryDialogsServiceSpy.confirm).toHaveBeenCalled();
    });
  });
});
