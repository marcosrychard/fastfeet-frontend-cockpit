import { TestBed } from '@angular/core/testing';
import { CockpitModule } from './cockpit.module';
describe('CockpitModule', () => {
  let pipe: CockpitModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CockpitModule] });
    pipe = TestBed.get(CockpitModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
