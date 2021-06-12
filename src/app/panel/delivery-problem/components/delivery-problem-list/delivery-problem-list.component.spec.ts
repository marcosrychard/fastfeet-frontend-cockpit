import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { DeliveryProblemListComponent } from './delivery-problem-list.component';

describe('DeliveryProblemListComponent', () => {
  let component: DeliveryProblemListComponent;
  let fixture: ComponentFixture<DeliveryProblemListComponent>;
  let loadingServiceSpy: jasmine.SpyObj<LoadingService>;
  let deliveryServiceSpy: jasmine.SpyObj<DeliveryService>;

  beforeEach(() => {
    loadingServiceSpy = jasmine.createSpyObj('LoadingService', [
      'show',
      'stop',
    ]);
    deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'findByDeliveryId',
    ]);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryProblemListComponent],
      providers: [
        { provide: LoadingService, useValue: loadingServiceSpy },
        { provide: DeliveryService, useValue: deliveryServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliveryProblemListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
