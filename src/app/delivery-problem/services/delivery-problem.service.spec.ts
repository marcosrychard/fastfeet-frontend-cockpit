import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { EnvApiService } from '../../shared/services/http/env-api.service';
import { DeliveryProblemService } from './delivery-problem.service';
describe('DeliveryProblemService', () => {
  let service: DeliveryProblemService;
  beforeEach(() => {
    const envApiServiceStub = () => ({ getApiDeliveryProblem: () => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DeliveryProblemService,
        { provide: EnvApiService, useFactory: envApiServiceStub }
      ]
    });
    service = TestBed.get(DeliveryProblemService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
