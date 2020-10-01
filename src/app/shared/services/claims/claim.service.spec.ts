import { TestBed } from '@angular/core/testing';
import { ClaimService } from './claim.service';
describe('ClaimService', () => {
  let service: ClaimService;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ClaimService] });
    service = TestBed.get(ClaimService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
