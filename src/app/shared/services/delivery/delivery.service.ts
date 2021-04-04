import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DeliveryRequestModel } from '../../models/request/delivery-request.model';
import { DeliveryPaginatorResponseModel } from '../../models/response/delivery-paginator-response.model';
import { DeliveryViewModel } from '../../models/view-models/delivery.view-model';
import { EnvApiService } from '../http/env-api.service';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private url: string;
  constructor(private envApiService: EnvApiService, private http: HttpClient) {
    this.url = this.envApiService.getApiDelivery();
  }

  public findAllDeliveries(params = {}) {
    return this.http.get<DeliveryPaginatorResponseModel>(this.url, { params });
  }

  public findByDeliveryId(id: string) {
    return this.http.get<DeliveryViewModel>(`${this.url}/${id}`);
  }

  public createDelivery(data: DeliveryRequestModel) {
    return this.http.post<DeliveryViewModel>(this.url, data);
  }

  public updateDelivery(data: DeliveryRequestModel) {
    return this.http.put<DeliveryViewModel>(`${this.url}/${data.id}`, data);
  }
}
