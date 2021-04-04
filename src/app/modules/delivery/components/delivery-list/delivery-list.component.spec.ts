import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimService } from 'src/app/shared/services/claims/claim.service';
import { DeliveryListComponent } from './delivery-list.component';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;
  let claimServiceSpy: jasmine.SpyObj<ClaimService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });

    claimServiceSpy = jasmine.createSpyObj('ClaimService', ['checkHasClaim']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useValue: routerSpy },

        { provide: ClaimService, useValue: claimServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  it(`claims has default value`, () => {
    expect(component.claims).toEqual(`ADMIN`);
  });

  it('goForm', () => {
    const data = { id: 'teste' };

    component.goForm(data);

    expect(routerSpy.navigate).toHaveBeenCalledWith([
      '/cockpit/delivery/form/' + data.id,
    ]);
  });
});
