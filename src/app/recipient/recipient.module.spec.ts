import { TestBed } from '@angular/core/testing';
import { RecipientModule } from './recipient.module';
describe('RecipientModule', () => {
  let pipe: RecipientModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RecipientModule] });
    pipe = TestBed.get(RecipientModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
