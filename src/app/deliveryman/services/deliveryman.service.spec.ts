import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { EnvApiService } from '../../shared/services/http/env-api.service';
import { DeliverymanService } from './deliveryman.service';
describe('DeliverymanService', () => {
  let service: DeliverymanService;
  beforeEach(() => {
    const envApiServiceStub = () => ({ getApiDeliveryman: () => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DeliverymanService,
        { provide: EnvApiService, useFactory: envApiServiceStub }
      ]
    });
    service = TestBed.get(DeliverymanService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
