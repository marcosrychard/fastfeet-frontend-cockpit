import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-problem-modal-cancel',
  templateUrl: './delivery-problem-modal-cancel.component.html',
  styleUrls: ['./delivery-problem-modal-cancel.component.scss']
})
export class DeliveryProblemModalCancelComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<DeliveryProblemModalCancelComponent>
  ) { }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
