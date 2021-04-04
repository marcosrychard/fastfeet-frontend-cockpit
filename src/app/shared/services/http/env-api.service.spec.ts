import { TestBed } from '@angular/core/testing';
import { EnvConfigService } from './env-config.service';
import { EnvApiService } from './env-api.service';

describe('EnvApiService', () => {
  let service: EnvApiService;

  beforeEach(() => {
    const envConfigServiceStub = () => ({ getConfig: string => ({}) });
    TestBed.configureTestingModule({
      providers: [
        EnvApiService,
        { provide: EnvConfigService, useFactory: envConfigServiceStub }
      ]
    });
    service = TestBed.inject(EnvApiService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  it('getApiDelivery makes expected calls', () => {
    const envConfigServiceStub = TestBed.inject(EnvConfigService);

    spyOn(envConfigServiceStub, 'getConfig').and.callThrough();

    service.getApiDelivery();

    expect(envConfigServiceStub.getConfig).toHaveBeenCalled();
  });

  it('getApiDeliveryman makes expected calls', () => {
    const envConfigServiceStub = TestBed.inject(EnvConfigService);

    spyOn(envConfigServiceStub, 'getConfig').and.callThrough();

    service.getApiDeliveryman();

    expect(envConfigServiceStub.getConfig).toHaveBeenCalled();
  });

  it('getApiRecipient makes expected calls', () => {
    const envConfigServiceStub = TestBed.inject(EnvConfigService);

    spyOn(envConfigServiceStub, 'getConfig').and.callThrough();

    service.getApiRecipient();

    expect(envConfigServiceStub.getConfig).toHaveBeenCalled();
  });

  it('getApiDeliveryProblem makes expected calls', () => {
    const envConfigServiceStub = TestBed.inject(EnvConfigService);

    spyOn(envConfigServiceStub, 'getConfig').and.callThrough();

    service.getApiDeliveryProblem();

    expect(envConfigServiceStub.getConfig).toHaveBeenCalled();
  });

  it('getApiAuth makes expected calls', () => {
    const envConfigServiceStub = TestBed.inject(EnvConfigService);

    spyOn(envConfigServiceStub, 'getConfig').and.callThrough();

    service.getApiAuth();

    expect(envConfigServiceStub.getConfig).toHaveBeenCalled();
  });
});
