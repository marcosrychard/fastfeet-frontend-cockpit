import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { RecipientPaginatorResponseModel } from 'src/app/shared/models/response/recipient-response.model';
import { RecipientViewModel } from 'src/app/shared/models/view-models/recipient-view-model';
import { RecipientService } from 'src/app/shared/services/recipient/recipient.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.scss'],
})
export class RecipientListComponent implements OnInit {
  public pageSize = 10;
  public pageIndex = 0;
  public loading = true;
  public totalItems: number;
  public showFirstLastButtons = true;
  public pageSizeOptions = [5, 10, 25];
  public recipientResponseModel: RecipientPaginatorResponseModel;

  constructor(
    private router: Router,
    private recipientServie: RecipientService
  ) {}

  ngOnInit(): void {
    this.findAllRecipients({ page: this.pageIndex, limit: this.pageSize });
  }

  public goForm(data: RecipientViewModel) {
    this.router.navigate(['/cockpit/recipient/form/' + data.id]);
  }

  public handlePageEvent(event: PageEvent) {
    this.totalItems = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.findAllRecipients({ page: this.pageIndex, limit: this.pageSize });
  }

  private findAllRecipients(params: {}): void {
    this.recipientServie
      .findAllRecipients(params)
      .subscribe((res: RecipientPaginatorResponseModel) => {
        this.recipientResponseModel = res;
        this.totalItems = this.recipientResponseModel.meta.totalItems;
        this.loading = false;
      });
  }
}
