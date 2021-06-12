import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DeliveryPaginatorResponseModel } from 'src/app/shared/models/response/delivery-paginator-response.model';
import { DeliveryViewModel } from 'src/app/shared/models/view-models/delivery.view-model';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { LoadingService } from 'src/app/shared/services/loading/loading.service';
import { DeliveryDataViewsModalComponent } from '../delivery-data-views-modal/delivery-data-views-modal.component';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnInit {
  public pageSize = 10;
  public pageIndex = 0;
  public totalItems: number;
  public showFirstLastButtons = true;
  public pageSizeOptions = [5, 10, 25];
  public deliveryResponseModel: DeliveryPaginatorResponseModel;

  constructor(
    private router: Router,
    private deliveryService: DeliveryService,
    private dialog: MatDialog,
    public loadingService: LoadingService
  ) {}

  ngOnInit(): void {
    this.loadingService.show();
    this.findAllDeliveries({ page: this.pageIndex, limit: this.pageSize });
  }

  openDialog(id: string) {
    this.dialog.open(DeliveryDataViewsModalComponent, { data: { id } });
  }

  handlePageEvent(event: PageEvent) {
    this.totalItems = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.findAllDeliveries({ page: this.pageIndex, limit: this.pageSize });
  }

  goForm(data: DeliveryViewModel) {
    this.router.navigate(['/panel/delivery/form/' + data.id]);
  }

  findAllDeliveries(params = {}) {
    this.deliveryService.findAllDeliveries(params).subscribe(
      (res: DeliveryPaginatorResponseModel) => {
        this.deliveryResponseModel = new DeliveryPaginatorResponseModel(res);
        this.totalItems = +this.deliveryResponseModel.meta.totalItems;
        this.loadingService.stop();
      },
      (error) => {
        this.loadingService.stop();
      }
    );
  }
}
