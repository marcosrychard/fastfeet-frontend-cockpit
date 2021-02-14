import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvApiService } from '../http/env-api.service';
import { DeliveryRequestModel } from '../../models/request/delivery-request.model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  constructor(private envApiService: EnvApiService, private http: HttpClient) { }

  findAllDeliveries(params = {}) {
    return this.http.get(this.envApiService.getApiDelivery(), { params });
  }

  findByDeliveryId(id: string) {
    return this.http.get(this.envApiService.getApiDelivery() + '/' + id);
  }

  createDelivery(data: DeliveryRequestModel) {
    return this.http.post<DeliveryRequestModel>(this.envApiService.getApiDelivery(), data);
  }

  updateDelivery(data: DeliveryRequestModel) {
    return this.http.put<DeliveryRequestModel>(this.envApiService.getApiDelivery() + '/' + data.id, data);
  }
}
