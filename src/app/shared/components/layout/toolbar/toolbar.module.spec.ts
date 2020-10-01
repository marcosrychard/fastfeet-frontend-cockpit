import { TestBed } from '@angular/core/testing';
import { ToolbarModule } from './toolbar.module';
describe('ToolbarModule', () => {
  let pipe: ToolbarModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ToolbarModule] });
    pipe = TestBed.get(ToolbarModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
