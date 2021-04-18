import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RecipientService } from './recipient.service';


describe('RecipientService', () => {
  let service: RecipientService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipientService],
    });
    service = TestBed.inject(RecipientService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
