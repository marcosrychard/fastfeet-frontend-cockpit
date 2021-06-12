import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeliveryRequestModel } from '../../models/request/delivery-request.model';
import { DeliveryPaginatorResponseModel } from '../../models/response/delivery-paginator-response.model';
import { DeliveryProblemPaginatorResponseModel } from '../../models/response/delivery-problem-paginator-response.model';
import { DeliveryViewModel } from '../../models/view-models/delivery.view-model';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private url: string;
  constructor(private http: HttpClient) {
    this.url = environment.BASE_URL + environment.DELIVERIES;
  }

  findAllDeliveries(params = {}) {
    return this.http.get<DeliveryPaginatorResponseModel>(this.url, { params });
  }

  findByDeliveryId(id: string) {
    return this.http.get<DeliveryViewModel>(`${this.url}/${id}`);
  }

  createDelivery(data: DeliveryRequestModel) {
    return this.http.post<DeliveryViewModel>(this.url, data);
  }

  updateDelivery(data: DeliveryRequestModel) {
    return this.http.put<DeliveryViewModel>(`${this.url}/${data.id}`, data);
  }

  findAllDeliveryProblems(params = {}) {
    return this.http.get<DeliveryProblemPaginatorResponseModel>(
      `${this.url}/list/problems`,
      {
        params,
      }
    );
  }

  findAllProblemaGroupDeliveryId(params = {}) {
    return this.http.get<DeliveryProblemPaginatorResponseModel>(
      `${this.url}/group-delivery/problems`,
      {
        params,
      }
    );
  }
}
