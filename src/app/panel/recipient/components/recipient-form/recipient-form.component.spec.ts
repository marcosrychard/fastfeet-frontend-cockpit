import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MockActivatedRoute } from 'src/app/core/mocks/activated-route.mock';
import { FORM_BUILDER_RECIPIENT } from 'src/app/core/mocks/recipient/recipient.dummy';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';
import { RecipientFormComponent } from './recipient-form.component';

describe('RecipientFormComponent', () => {
  const formBuilder = new FormBuilder();

  let component: RecipientFormComponent;
  let fixture: ComponentFixture<RecipientFormComponent>;
  let recipientServiceSpy: jasmine.SpyObj<RecipientService>;
  let routerSpy: jasmine.SpyObj<Router>;
  let activatedRouteSpy: MockActivatedRoute;
  let loadingServiceSpy: jasmine.SpyObj<LoadingService>;

  beforeEach(() => {
    activatedRouteSpy = new MockActivatedRoute();

    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    recipientServiceSpy = jasmine.createSpyObj('RecipientService', [
      'findAllRecipients',
    ]);

    loadingServiceSpy = jasmine.createSpyObj('LoadingService', [
      'show',
      'stop',
    ]);
    TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [RecipientFormComponent],
      providers: [
        { provide: Router, useValue: routerSpy },
        { provide: ActivatedRoute, useValue: activatedRouteSpy },
        { provide: RecipientService, useValue: recipientServiceSpy },
        { provide: LoadingService, useValue: loadingServiceSpy },
      ],
    });
    fixture = TestBed.createComponent(RecipientFormComponent);
    component = fixture.componentInstance;
    component.recipientForm = formBuilder.group(FORM_BUILDER_RECIPIENT);
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
