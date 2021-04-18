import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DeliverymanRequestModel } from '../../models/request/deliveryman-request.model';
import { DeliveryManPaginatorResponseModel } from '../../models/response/deliveryman-paginator-response.model';
import { DeliveryManViewModel } from '../../models/view-models/deliveryman.view-model';

@Injectable({
  providedIn: 'root',
})
export class DeliverymanService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.BASE_URL + environment.DELIVERYMANS;
  }

  public findAllDeliveryman(params?: any) {
    return this.http.get<DeliveryManPaginatorResponseModel>(this.url, {
      params,
    });
  }

  public findByDeliverymanId(id: string) {
    return this.http.get<DeliveryManViewModel>(` ${this.url}/${id}`);
  }

  public createDeliveryman(data: DeliverymanRequestModel) {
    return this.http.post<DeliveryManViewModel>(this.url, data);
  }

  public updateDeliveryman(data: DeliverymanRequestModel) {
    return this.http.put<DeliveryManViewModel>(`${this.url}/${data.id}`, data);
  }
}
