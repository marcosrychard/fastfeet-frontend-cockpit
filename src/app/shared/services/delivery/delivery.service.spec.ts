import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { EnvApiService } from '../http/env-api.service';
import { DeliveryService } from './delivery.service';

describe('DeliveryService', () => {
  let service: DeliveryService;

  beforeEach(() => {
    const envApiServiceStub = () => ({ getApiDelivery: () => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        DeliveryService,
        { provide: EnvApiService, useFactory: envApiServiceStub },
      ],
    });
    service = TestBed.inject(DeliveryService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
