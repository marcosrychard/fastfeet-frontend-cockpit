import { TestBed } from '@angular/core/testing';
import { RecipientRoutingModule } from './recipient-routing.module';
describe('RecipientRoutingModule', () => {
  let pipe: RecipientRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [RecipientRoutingModule] });
    pipe = TestBed.get(RecipientRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
