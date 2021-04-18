import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DeliveryProblemPaginatorResponseModel } from 'src/app/shared/models/response/delivery-problem-paginator-response.model';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';

@Component({
  selector: 'app-delivery-problem-list',
  templateUrl: './delivery-problem-list.component.html',
  styleUrls: ['./delivery-problem-list.component.scss'],
})
export class DeliveryProblemListComponent implements OnInit {
  public pageSize = 10;
  public pageIndex = 0;
  public loading = true;
  public totalItems: number;
  public showFirstLastButtons = true;
  public pageSizeOptions = [5, 10, 25];
  public deliveryProblem: DeliveryProblemPaginatorResponseModel;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this.findAlldeliveryProblems({
      page: this.pageIndex,
      limit: this.pageSize,
    });
  }

  public handlePageEvent(event: PageEvent) {
    this.totalItems = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.findAlldeliveryProblems({
      page: this.pageIndex,
      limit: this.pageSize,
    });
  }

  private findAlldeliveryProblems(params = {}) {
    this.deliveryService.findAllDeliveryProblems(params).subscribe(
      (res: DeliveryProblemPaginatorResponseModel) => {
        this.deliveryProblem = new DeliveryProblemPaginatorResponseModel(res);
        this.totalItems = +this.deliveryProblem.meta.totalItems;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }
}
