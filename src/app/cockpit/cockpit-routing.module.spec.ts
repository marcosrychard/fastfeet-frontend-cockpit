import { TestBed } from '@angular/core/testing';
import { CockpitRoutingModule } from './cockpit-routing.module';
describe('CockpitRoutingModule', () => {
  let pipe: CockpitRoutingModule;
  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [CockpitRoutingModule] });
    pipe = TestBed.get(CockpitRoutingModule);
  });
  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
