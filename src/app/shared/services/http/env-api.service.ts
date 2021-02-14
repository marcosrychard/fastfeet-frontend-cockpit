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

  getApiDelivery() {
    return this.apiRoot + this.config.getConfig('deliveries');
  }

  getApiDeliveryman() {
    return this.apiRoot + this.config.getConfig('deliverymans');
  }

  getApiRecipient() {
    return this.apiRoot + this.config.getConfig('recipients');
  }

  getApiDeliveryProblem() {
    return this.apiRoot + this.config.getConfig('delivery_problem');
  }

  getApiAuth() {
    return this.apiRoot + this.config.getConfig('auth');
  }
}
