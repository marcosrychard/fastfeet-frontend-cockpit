import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DeliveryProblemModalViewComponent } from './delivery-problem-modal-view.component';

describe('DeliveryProblemModalViewComponent', () => {
  let component: DeliveryProblemModalViewComponent;
  let fixture: ComponentFixture<DeliveryProblemModalViewComponent>;

  beforeEach(() => {
    const matDialogRefStub = () => ({ close: arg => ({}) });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryProblemModalViewComponent],
      providers: [{ provide: MatDialogRef, useFactory: matDialogRefStub }]
    });
    fixture = TestBed.createComponent(DeliveryProblemModalViewComponent);
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
