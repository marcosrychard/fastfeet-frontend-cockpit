import { TestBed } from '@angular/core/testing';
import { ThemeModule } from './theme.module';
describe('ThemeModule', () => {
  let pipe: ThemeModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ThemeModule] });
    pipe = TestBed.get(ThemeModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
