import { Injectable } from '@angular/core';
import { EnvConfigService } from './env-config.service';

@Injectable({
  providedIn: 'root',
})
export class EnvApiService {
  private apiRoot = '';
  constructor(private config: EnvConfigService) {
    this.apiRoot = config.getConfig('api_root');
  }

  public getApiDelivery(): string {
    return this.apiRoot + this.config.getConfig('deliveries');
  }

  public getApiDeliveryman(): string {
    return this.apiRoot + this.config.getConfig('deliverymans');
  }

  public getApiRecipient(): string {
    return this.apiRoot + this.config.getConfig('recipients');
  }
  public getApiDeliveryProblem(): string {
    return this.apiRoot + this.config.getConfig('delivery_problem');
  }

  public getApiAuth(): string {
    return this.apiRoot + this.config.getConfig('auth');
  }
}
