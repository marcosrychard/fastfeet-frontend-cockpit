import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeliveryService } from 'src/app/shared/services/delivery/delivery.service';

type ModalParams = {
  id: string;
};

@Component({
  selector: 'app-delivery-data-views-modal',
  templateUrl: './delivery-data-views-modal.component.html',
  styleUrls: ['./delivery-data-views-modal.component.scss'],
})
export class DeliveryDataViewsModalComponent implements OnInit {
  public loading = true;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ModalParams,
    private deliveryService: DeliveryService,
    private dialogRef: MatDialogRef<DeliveryDataViewsModalComponent>
  ) {}

  ngOnInit(): void {
    this.findByDeliveryId(this.data.id);
  }

  findByDeliveryId(id: string) {
    this.deliveryService.findByDeliveryId(id).subscribe((res) => {
      this.loading = false;
      console.log(res);
    });
  }
}
