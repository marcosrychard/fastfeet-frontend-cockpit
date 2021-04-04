import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { DeliveryManPaginatorResponseModel } from 'src/app/shared/models/response/deliveryman-paginator-response.model';
import { DeliveryManViewModel } from 'src/app/shared/models/view-models/deliveryman.view-model';
import { ClaimService } from 'src/app/shared/services/claims/claim.service';
import { DeliverymanService } from 'src/app/shared/services/deliveryman/deliveryman.service';
@Component({
  selector: 'app-deliveryman-list',
  templateUrl: './deliveryman-list.component.html',
  styleUrls: ['./deliveryman-list.component.scss'],
})
export class DeliverymanListComponent implements OnInit {
  public pageSize = 10;
  public pageIndex = 0;
  public loading = true;
  public totalItems: number;
  public showFirstLastButtons = true;
  public pageSizeOptions = [5, 10, 25];
  public deliveryManResponseModel: DeliveryManPaginatorResponseModel;

  private claims = [];

  constructor(
    private router: Router,
    private claimService: ClaimService,
    private deliverymanService: DeliverymanService
  ) {}

  ngOnInit(): void {
    this.findAllDeliveryman({ page: this.pageIndex, limit: this.pageSize });
    this.checkHasClaim();
  }

  public goForm(data: DeliveryManViewModel) {
    this.router.navigate(['/cockpit/deliveryman/form/' + data.id]);
  }

  public handlePageEvent(event: PageEvent) {
    this.totalItems = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

    this.findAllDeliveryman({ page: this.pageIndex, limit: this.pageSize });
  }

  private findAllDeliveryman(params: {}): void {
    this.deliverymanService.findAllDeliveryman(params).subscribe(
      (res: DeliveryManPaginatorResponseModel) => {
        this.deliveryManResponseModel = res;
        this.totalItems = this.deliveryManResponseModel.meta.totalItems;
        this.loading = false;
      },
      (error) => {}
    );
  }

  private checkHasClaim() {
    this.claimService.checkHasClaim(this.claims);
  }
}
