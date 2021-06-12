import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { DeliverymanListComponent } from './deliveryman-list.component';

describe('DeliverymanListComponent', () => {
  let component: DeliverymanListComponent;
  let fixture: ComponentFixture<DeliverymanListComponent>;
  let routerSpy: jasmine.SpyObj<Router>;
  let deliverymanServiceSpy: jasmine.SpyObj<DeliverymanService>;
  let loadingServiceSpy: jasmine.SpyObj<LoadingService>;

  beforeEach(() => {
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    loadingServiceSpy = jasmine.createSpyObj('LoadingService', [
      'show',
      'stop',
    ]);

    deliverymanServiceSpy = jasmine.createSpyObj('DeliverymanService', [
      'findAllDeliveryman',
    ]);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliverymanListComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: DeliverymanService, useValue: deliverymanServiceSpy },
        { provide: LoadingService, useValue: loadingServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliverymanListComponent);
    component = fixture.componentInstance;
  });
});
