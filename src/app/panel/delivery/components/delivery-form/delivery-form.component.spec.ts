import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockActivatedRoute } from 'src/app/core/mocks/activated-route.mock';
import { DELIVERY_EMPYT } from 'src/app/core/mocks/delivery/delivery-constant.mock';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';
import { DeliveryFormComponent } from './delivery-form.component';

fdescribe('DeliveryFormComponent', () => {
  const formBuilder = new FormBuilder();

  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;
  let deliveryServiceSpy: jasmine.SpyObj<DeliveryService>;
  let recipientServiceSpy: jasmine.SpyObj<RecipientService>;
  let deliverymanServiceSpy: jasmine.SpyObj<DeliverymanService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: MockActivatedRoute;

  beforeEach(() => {
    activatedRouteSpy = new MockActivatedRoute();

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', [
      'findByDeliveryId',
      'createDelivery',
      'updateDelivery',
    ]);

    recipientServiceSpy = jasmine.createSpyObj('RecipientService', [
      'findAllRecipients',
    ]);

    deliverymanServiceSpy = jasmine.createSpyObj('DeliverymanService', [
      'findAllDeliveryman',
    ]);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [DeliveryFormComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: DeliverymanService, useValue: deliverymanServiceSpy },
        { provide: DeliveryService, useValue: deliveryServiceSpy },
        { provide: RecipientService, useValue: recipientServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    component.deliveryForm = formBuilder.group(DELIVERY_EMPYT);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const id = '37D25CA8-B48C-417B-9CCF-C311BF8F515B';

      activatedRouteSpy.setParameter(id);
      component.id = activatedRouteSpy.snapshot.params.id;

      spyOn(component, 'buildForm');
      spyOn(component, 'forkJoinCall');
      spyOn(component, 'findDeliveryById');

      component.ngOnInit();

      expect(component.id).toBe(id);
      expect(component.buildForm).toHaveBeenCalled();
      expect(component.forkJoinCall).toHaveBeenCalled();
      expect(component.findDeliveryById).toHaveBeenCalledWith(component.id);
    });
  });

  describe('ngOnDestroy', () => {
    it('makes expected calls', () => {
      spyOn(component.subscriptions, 'unsubscribe');
      component.ngOnDestroy();
      expect(component.subscriptions.unsubscribe).toHaveBeenCalled();
    });
  });
});
