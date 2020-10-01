import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-deliveryman-modal",
  templateUrl: "./deliveryman-modal.component.html",
  styleUrls: ["./deliveryman-modal.component.scss"],
})
export class DeliverymanModalComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<DeliverymanModalComponent>) {}

  ngOnInit() {}

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
