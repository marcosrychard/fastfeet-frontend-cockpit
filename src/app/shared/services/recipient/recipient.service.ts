import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RecipientRequestModel } from '../../models/request/recipient-request.model';
import { RecipientPaginatorResponseModel } from '../../models/response/recipient-response.model';
import { RecipientViewModel } from '../../models/view-models/recipient-view-model';

@Injectable({
  providedIn: 'root',
})
export class RecipientService {
  private url: string;

  constructor(private http: HttpClient) {
    this.url = environment.BASE_URL + environment.RECIPIENTS;
  }

  findAllRecipients(params = {}) {
    return this.http.get<RecipientPaginatorResponseModel>(this.url, { params });
  }

  findByRecipientId(id: string) {
    return this.http.get<RecipientViewModel>(`${this.url}/${id}`);
  }

  createRecipient(data: RecipientRequestModel) {
    return this.http.post<RecipientViewModel>(this.url, data);
  }

  updateRecipient(data: RecipientRequestModel) {
    return this.http.put<RecipientViewModel>(`${this.url}/${data.id}`, data);
  }
}
