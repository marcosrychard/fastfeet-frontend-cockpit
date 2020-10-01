import { TestBed } from '@angular/core/testing';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RecipientService } from '../services/recipient.service';
import { RecipientResolve } from './recipient.resolve';
describe('RecipientResolve', () => {
  let service: RecipientResolve;
  beforeEach(() => {
    const activatedRouteSnapshotStub = () => ({});
    const recipientServiceStub = () => ({ findAllRecipients: () => ({}) });
    TestBed.configureTestingModule({
      providers: [
        RecipientResolve,
        {
          provide: ActivatedRouteSnapshot,
          useFactory: activatedRouteSnapshotStub
        },
        { provide: RecipientService, useFactory: recipientServiceStub }
      ]
    });
    service = TestBed.get(RecipientResolve);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  describe('resolve', () => {
    it('makes expected calls', () => {
      const activatedRouteSnapshotStub: ActivatedRouteSnapshot = TestBed.get(
        ActivatedRouteSnapshot
      );
      const recipientServiceStub: RecipientService = TestBed.get(
        RecipientService
      );
      spyOn(recipientServiceStub, 'findAllRecipients').and.callThrough();
      service.resolve(activatedRouteSnapshotStub);
      expect(recipientServiceStub.findAllRecipients).toHaveBeenCalled();
    });
  });
});
