import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delivery-problem-modal-view',
  templateUrl: './delivery-problem-modal-view.component.html',
  styleUrls: ['./delivery-problem-modal-view.component.scss']
})
export class DeliveryProblemModalViewComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(
    public dialogRef: MatDialogRef<DeliveryProblemModalViewComponent>
  ) { }

  ngOnInit(): void {
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
