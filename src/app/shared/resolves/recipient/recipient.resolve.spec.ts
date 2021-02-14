import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RecipientService } from '../../services/recipient/recipient.service';
import { RecipientResolve } from './recipient.resolve';

describe('RecipientResolve', () => {
  let service: RecipientResolve;

  beforeEach(() => {
    const recipientServiceStub = () => ({ findAllRecipients: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        RecipientResolve,
        { provide: RecipientService, useFactory: recipientServiceStub }
      ]
    });
    service = TestBed.inject(RecipientResolve);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = {} as any;
      const recipientServiceStub = TestBed.inject(RecipientService);

      spyOn(recipientServiceStub, 'findAllRecipients').and.callThrough();
      service.resolve(activatedRouteSnapshotStub);

      expect(recipientServiceStub.findAllRecipients).toHaveBeenCalled();
    });
  });
});
