import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { DeliveryProblemPaginatorResponseModel } from 'src/app/shared/models/response/delivery-problem-paginator-response.model';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';

@Component({
  selector: 'app-delivery-problem-list',
  templateUrl: './delivery-problem-list.component.html',
  styleUrls: ['./delivery-problem-list.component.scss'],
})
export class DeliveryProblemListComponent implements OnInit {
  public pageSize = 10;
  public pageIndex = 0;
  public totalItems: number;
  public showFirstLastButtons = true;
  public pageSizeOptions = [5, 10, 25];
  public deliveryProblem: DeliveryProblemPaginatorResponseModel;

  constructor(
    private deliveryService: DeliveryService,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.show();
    this.findAllProblemaGroupDeliveryId({
      page: this.pageIndex,
      limit: this.pageSize,
    });
  }

  handlePageEvent(event: PageEvent) {
    this.totalItems = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.findAllProblemaGroupDeliveryId({
      page: this.pageIndex,
      limit: this.pageSize,
    });
  }

  findAllProblemaGroupDeliveryId(params = {}) {
    this.deliveryService.findAllProblemaGroupDeliveryId(params).subscribe(
      (res: DeliveryProblemPaginatorResponseModel) => {
        this.deliveryProblem = new DeliveryProblemPaginatorResponseModel(res);
        this.totalItems = +this.deliveryProblem.meta.totalItems;
        this.loadingService.stop();
      },
      (error) => {
        this.loadingService.stop();
      }
    );
  }
}
