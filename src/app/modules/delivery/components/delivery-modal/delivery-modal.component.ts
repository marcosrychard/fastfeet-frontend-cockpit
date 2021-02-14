import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-modal',
  templateUrl: './delivery-modal.component.html',
  styleUrls: ['./delivery-modal.component.scss'],
})
export class DeliveryModalComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<DeliveryModalComponent>
  ) { }

  ngOnInit() { }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
