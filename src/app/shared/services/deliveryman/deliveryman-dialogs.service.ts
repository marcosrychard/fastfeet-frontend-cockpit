import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DeliverymanModalComponent } from '../../../modules/deliveryman/components/deliveryman-modal/deliveryman-modal.component';

@Injectable({
  providedIn: 'root',
})
export class DeliverymanDialogsService {
  constructor(private dialog: MatDialog) {}

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<DeliverymanModalComponent>;

    dialogRef = this.dialog.open(DeliverymanModalComponent);
    dialogRef.disableClose = true;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
