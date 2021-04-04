import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EnvApiService } from '../http/env-api.service';
import { RecipientPaginatorResponseModel } from '../../models/response/recipient-response.model';
import { RecipientViewModel } from '../../models/view-models/recipient-view-model';
import { RecipientRequestModel } from '../../models/request/recipient-request.model';

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  private url: string;

  constructor(private envApiService: EnvApiService, private http: HttpClient) {
    this.url = this.envApiService.getApiRecipient();
  }

  public findAllRecipients(params = {}) {
    return this.http.get<RecipientPaginatorResponseModel>(this.url, { params });
  }

  public findByRecipientId(id: string) {
    return this.http.get<RecipientViewModel>(`${this.url}/${id}`);
  }

  public createRecipient(data: RecipientRequestModel) {
    return this.http.post<RecipientViewModel>(this.url, data);
  }

  public updateRecipient(data: RecipientRequestModel) {
    return this.http.put<RecipientViewModel>(`${this.url}/${data.id}`, data);
  }
}
