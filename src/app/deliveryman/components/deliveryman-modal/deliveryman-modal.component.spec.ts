import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DeliverymanModalComponent } from './deliveryman-modal.component';

describe('DeliverymanModalComponent', () => {
  let component: DeliverymanModalComponent;
  let fixture: ComponentFixture<DeliverymanModalComponent>;

  beforeEach(() => {
    const matDialogRefStub = () => ({ close: arg => ({}) });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliverymanModalComponent],
      providers: [{ provide: MatDialogRef, useFactory: matDialogRefStub }]
    });
    fixture = TestBed.createComponent(DeliverymanModalComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

  describe('onConfirmClick', () => {
    it('makes expected calls', () => {
      const matDialogRefStub = fixture.debugElement.injector.get(
        MatDialogRef
      );
      spyOn(matDialogRefStub, 'close').and.callThrough();
      component.onConfirmClick();
      expect(matDialogRefStub.close).toHaveBeenCalled();
    });
  });
});
