import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryDataViewsModalComponent } from './delivery-data-views-modal.component';

describe('DeliveryDataViewsModalComponent', () => {
  let component: DeliveryDataViewsModalComponent;
  let fixture: ComponentFixture<DeliveryDataViewsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryDataViewsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryDataViewsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
