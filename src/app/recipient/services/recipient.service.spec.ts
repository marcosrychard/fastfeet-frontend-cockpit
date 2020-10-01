import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { EnvApiService } from '../../shared/services/http/env-api.service';
import { RecipientService } from './recipient.service';
describe('RecipientService', () => {
  let service: RecipientService;
  beforeEach(() => {
    const envApiServiceStub = () => ({ getApiRecipient: () => ({}) });
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        RecipientService,
        { provide: EnvApiService, useFactory: envApiServiceStub }
      ]
    });
    service = TestBed.get(RecipientService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});