import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { EnvConfigService } from './env-config.service';

describe('EnvConfigService', () => {
  let service: EnvConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EnvConfigService],
    });
    service = TestBed.inject(EnvConfigService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('load', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.load().then((res) => {
        expect(res).toEqual(true);
      });
      const req = httpTestingController.expectOne('./assets/env/env.json');
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
