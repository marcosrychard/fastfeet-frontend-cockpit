import { TestBed } from '@angular/core/testing';
import { RecipientStoreModule } from './recipient-store.module';
describe('RecipientStoreModule', () => {
  let pipe: RecipientStoreModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RecipientStoreModule] });
    pipe = TestBed.get(RecipientStoreModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
