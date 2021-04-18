import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-data-views-modal',
  templateUrl: './delivery-data-views-modal.component.html',
  styleUrls: ['./delivery-data-views-modal.component.scss'],
})
export class DeliveryDataViewsModalComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<DeliveryDataViewsModalComponent>
  ) {}

  ngOnInit(): void {}
}
