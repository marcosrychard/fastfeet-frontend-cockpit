import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { RecipientFacade } from './recipient.facade';
describe('RecipientFacade', () => {
  let service: RecipientFacade;
  beforeEach(() => {
    const storeStub = () => ({ dispatch: arg => ({}) });
    TestBed.configureTestingModule({
      providers: [RecipientFacade, { provide: Store, useFactory: storeStub }]
    });
    service = TestBed.get(RecipientFacade);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
