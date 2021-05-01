import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { displayedColumns } from '../../../../core/constants/delivery-problems.constant';
import { DeliveryProblemListComponent } from './delivery-problem-list.component';

describe('DeliveryProblemListComponent', () => {
  let component: DeliveryProblemListComponent;
  let fixture: ComponentFixture<DeliveryProblemListComponent>;

  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [DeliveryProblemListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
      ]
    });
    fixture = TestBed.createComponent(DeliveryProblemListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });

});
