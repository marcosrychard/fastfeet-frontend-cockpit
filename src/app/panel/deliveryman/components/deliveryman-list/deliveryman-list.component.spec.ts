import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
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
      ],
    });
    fixture = TestBed.createComponent(DeliverymanListComponent);
    component = fixture.componentInstance;
  });
});
