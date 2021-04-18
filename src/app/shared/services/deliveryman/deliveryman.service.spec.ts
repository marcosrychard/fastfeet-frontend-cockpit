import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { DeliverymanService } from './deliveryman.service';

describe('DeliverymanService', () => {
  let service: DeliverymanService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeliverymanService],
    });
    service = TestBed.inject(DeliverymanService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
