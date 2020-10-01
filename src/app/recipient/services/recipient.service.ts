import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { EnvApiService } from "../../shared/services/http/env-api.service";

@Injectable({
  providedIn: "root",
})
export class RecipientService {
  constructor(private envApiService: EnvApiService, private http: HttpClient) { }

  findAllRecipients(params = {}) {
    return this.http.get(this.envApiService.getApiRecipient(), params);
  }

  findByRecipientId(id: number) {
    return this.http.get(this.envApiService.getApiRecipient() + "/" + id);
  }

  createRecipient(data: any) {
    return this.http.post(this.envApiService.getApiRecipient(), data);
  }

  updateRecipient(data: any) {
    return this.http.put(
      this.envApiService.getApiRecipient() + "/" + data.id,
      data
    );
  }
}
