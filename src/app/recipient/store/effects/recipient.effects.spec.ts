import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Actions } from '@ngrx/effects';
import { RecipientService } from 'src/app/recipient/services/recipient.service';
import { RecipientEffects } from './recipient.effects';
describe('RecipientEffects', () => {
  let service: RecipientEffects;
  beforeEach(() => {
    const routerStub = () => ({});
    const actionsStub = () => ({});
    const recipientServiceStub = () => ({});
    TestBed.configureTestingModule({
      providers: [
        RecipientEffects,
        { provide: Router, useFactory: routerStub },
        { provide: Actions, useFactory: actionsStub },
        { provide: RecipientService, useFactory: recipientServiceStub }
      ]
    });
    service = TestBed.get(RecipientEffects);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
