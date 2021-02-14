import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvApiService } from '../http/env-api.service';

@Injectable({
  providedIn: 'root',
})
export class DeliverymanService {
  constructor(private envApiService: EnvApiService, private http: HttpClient) { }

  findAllDeliveryman(params?: any) {
    return this.http.get(this.envApiService.getApiDeliveryman(), {params});
  }

  findByDeliverymanId(id: number) {
    return this.http.get(this.envApiService.getApiDeliveryman() + '/' + id);
  }

  createDeliveryman(data: any) {
    return this.http.post(this.envApiService.getApiDeliveryman(), data);
  }

  updateDeliveryman(data: any) {
    return this.http.put(
      this.envApiService.getApiDeliveryman() + '/' + data.id,
      data
    );
  }
}
