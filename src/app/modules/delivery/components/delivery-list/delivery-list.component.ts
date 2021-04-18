import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DeliveryPaginatorResponseModel } from 'src/app/shared/models/response/delivery-paginator-response.model';
import { DeliveryViewModel } from 'src/app/shared/models/view-models/delivery.view-model';
import { ClaimService } from 'src/app/shared/services/claims/claim.service';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';
import { DeliveryDataViewsModalComponent } from '../delivery-data-views-modal/delivery-data-views-modal.component';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnInit {
  public pageSize = 10;
  public pageIndex = 0;
  public loading = true;
  public totalItems: number;
  public showFirstLastButtons = true;
  public pageSizeOptions = [5, 10, 25];
  public deliveryResponseModel: DeliveryPaginatorResponseModel;

  private claims = 'ADMIN'; // localStorage ;

  constructor(
    private router: Router,
    private claimService: ClaimService,
    private deliveryService: DeliveryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.findAllDeliveries({ page: this.pageIndex, limit: this.pageSize });
    this.checkHasClaim();
  }

  openDialog() {
    this.dialog.open(DeliveryDataViewsModalComponent);
  }

  public handlePageEvent(event: PageEvent) {
    this.totalItems = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.findAllDeliveries({ page: this.pageIndex, limit: this.pageSize });
  }

  public goForm(data: DeliveryViewModel) {
    this.router.navigate(['/cockpit/delivery/form/' + data.id]);
  }

  private findAllDeliveries(params = {}) {
    this.deliveryService.findAllDeliveries(params).subscribe(
      (res: DeliveryPaginatorResponseModel) => {
        this.deliveryResponseModel = new DeliveryPaginatorResponseModel(res);
        this.totalItems = +this.deliveryResponseModel.meta.totalItems;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
      }
    );
  }

  private checkHasClaim() {
    this.claimService.checkHasClaim(this.claims);
  }
}
