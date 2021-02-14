import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvApiService } from '../http/env-api.service';

@Injectable({
  providedIn: 'root'
})
export class DeliveryProblemService {

  constructor(
    private envApiService: EnvApiService,
    private httpClient: HttpClient
  ) {}

  findAllDeliveryProblems(params?: any) {
    const url = this.envApiService.getApiDeliveryProblem();
    return this.httpClient.get(url, params);
  }
}
