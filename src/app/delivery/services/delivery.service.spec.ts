import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { EnvApiService } from '../../shared/services/http/env-api.service';
import { DeliveryService } from './delivery.service';

describe('DeliveryService', () => {
  let service: DeliveryService;

  beforeEach(() => {
    const envApiServiceStub = () => ({ getApiDelivery: () => ({}) });

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DeliveryService,
        { provide: EnvApiService, useFactory: envApiServiceStub }
      ]
    });

    service = TestBed.get(DeliveryService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
