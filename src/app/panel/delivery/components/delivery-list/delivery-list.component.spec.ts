import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { DeliveryListComponent } from './delivery-list.component';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let deliveryServiceSpy: jasmine.SpyObj<DeliveryService>;
  let matDialogSpy: jasmine.SpyObj<MatDialog>;
  let loadingServiceSpy: jasmine.SpyObj<LoadingService>;

  beforeEach(() => {
    matDialogSpy = jasmine.createSpyObj('MatDialog', ['open']);

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'findByDeliveryId',
    ]);

    loadingServiceSpy = jasmine.createSpyObj('LoadingService', [
      'show',
      'stop',
    ]);

    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [DeliveryListComponent],
      providers: [
        { provide: MatDialog, useValue: matDialogSpy },
        { provide: Router, useValue: routerSpy },
        { provide: DeliveryService, useValue: deliveryServiceSpy },
        { provide: LoadingService, useValue: loadingServiceSpy },
      ],
    });

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
