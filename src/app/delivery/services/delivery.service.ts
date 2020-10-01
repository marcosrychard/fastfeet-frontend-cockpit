import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvApiService } from "../../shared/services/http/env-api.service";

@Injectable({
  providedIn: "root",
})
export class DeliveryService {
  constructor(private envApiService: EnvApiService, private http: HttpClient) {}

  findAllDeliveries(params = {}) {
    return this.http.get(this.envApiService.getApiDelivery(), { params });
  }

  findByDeliveryId(id: number) {
    return this.http.get(this.envApiService.getApiDelivery() + "/" + id);
  }

  createDelivery(data: any) {
    return this.http.post(this.envApiService.getApiDelivery(), data);
  }

  updateDelivery(data: any) {
    return this.http.put(
      this.envApiService.getApiDelivery() + "/" + data.id,
      data
    );
  }
}
