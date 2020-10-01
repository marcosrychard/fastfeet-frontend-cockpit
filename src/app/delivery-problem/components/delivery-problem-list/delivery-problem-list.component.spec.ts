import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeliverydProblemDialogsService } from '../../services/delivery-problem-dialogs.service';
import { displayedColumns } from '../../constants/delivery-problems.constant';
import { DeliveryProblemListComponent } from './delivery-problem-list.component';
describe('DeliveryProblemListComponent', () => {
  let component: DeliveryProblemListComponent;
  let fixture: ComponentFixture<DeliveryProblemListComponent>;
  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });
    const deliverydProblemDialogsServiceStub = () => ({
      confirmModalView: (string, string1) => ({ subscribe: f => f({}) }),
      confirmModalCancel: (string, string1) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryProblemListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        {
          provide: DeliverydProblemDialogsService,
          useFactory: deliverydProblemDialogsServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(DeliveryProblemListComponent);
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
  describe('confirmModalView', () => {
    it('makes expected calls', () => {
      const deliverydProblemDialogsServiceStub: DeliverydProblemDialogsService = fixture.debugElement.injector.get(
        DeliverydProblemDialogsService
      );
      spyOn(
        deliverydProblemDialogsServiceStub,
        'confirmModalView'
      ).and.callThrough();
      component.confirmModalView();
      expect(
        deliverydProblemDialogsServiceStub.confirmModalView
      ).toHaveBeenCalled();
    });
  });
  describe('confirmModalCancel', () => {
    it('makes expected calls', () => {
      const deliverydProblemDialogsServiceStub: DeliverydProblemDialogsService = fixture.debugElement.injector.get(
        DeliverydProblemDialogsService
      );
      spyOn(
        deliverydProblemDialogsServiceStub,
        'confirmModalCancel'
      ).and.callThrough();
      component.confirmModalCancel();
      expect(
        deliverydProblemDialogsServiceStub.confirmModalCancel
      ).toHaveBeenCalled();
    });
  });
});
