import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { DeliveryModalComponent } from "../components/delivery-modal/delivery-modal.component";

@Injectable({
  providedIn: "root",
})
export class DeliveryDialogsService {
  constructor(private dialog: MatDialog) {}

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<DeliveryModalComponent>;

    dialogRef = this.dialog.open(DeliveryModalComponent);
    dialogRef.disableClose = true;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
