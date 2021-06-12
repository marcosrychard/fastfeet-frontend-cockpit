import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliveryDataViewsModalComponent } from './delivery-data-views-modal.component';

describe('DeliveryDataViewsModalComponent', () => {
  let component: DeliveryDataViewsModalComponent;
  let fixture: ComponentFixture<DeliveryDataViewsModalComponent>;
  let deliveryServiceSpy: jasmine.SpyObj<DeliveryService>;

  beforeEach(async () => {
    deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'findByDeliveryId',
    ]);

    await TestBed.configureTestingModule({
      declarations: [DeliveryDataViewsModalComponent],
      providers: [
        { provide: DeliveryService, useValue: deliveryServiceSpy },
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDataViewsModalComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
