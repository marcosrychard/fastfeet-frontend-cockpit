import { TestBed } from '@angular/core/testing';
import { DefaultService } from './default.service';

describe('DefaultService', () => {
  let service: DefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [DefaultService] });
    service = TestBed.inject(DefaultService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
