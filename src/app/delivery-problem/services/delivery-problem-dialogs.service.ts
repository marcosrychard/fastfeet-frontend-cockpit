import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { DeliveryProblemModalViewComponent } from '../components/delivery-problem-modal-view/delivery-problem-modal-view.component';
import { DeliveryProblemModalCancelComponent } from '../components/delivery-problem-modal-cancel/delivery-problem-modal-cancel.component';

@Injectable({
  providedIn: "root",
})
export class DeliverydProblemDialogsService {
  constructor(private dialog: MatDialog) { }

  public confirmModalView(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<DeliveryProblemModalViewComponent>;

    dialogRef = this.dialog.open(DeliveryProblemModalViewComponent);
    dialogRef.disableClose = true;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }

  public confirmModalCancel(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<DeliveryProblemModalCancelComponent>;

    dialogRef = this.dialog.open(DeliveryProblemModalCancelComponent);
    dialogRef.disableClose = true;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
