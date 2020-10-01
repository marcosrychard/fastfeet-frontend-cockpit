import { Injectable } from "@angular/core";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { Observable } from "rxjs";
import { RecipientModalComponent } from '../components/recipient-modal/recipient-modal.component';

@Injectable({
  providedIn: "root",
})
export class RecipientDialogsService {
  constructor(private dialog: MatDialog) { }

  public confirm(title: string, message: string): Observable<boolean> {
    let dialogRef: MatDialogRef<RecipientModalComponent>;

    dialogRef = this.dialog.open(RecipientModalComponent);
    dialogRef.disableClose = true;
    dialogRef.componentInstance.title = title;
    dialogRef.componentInstance.message = message;

    return dialogRef.afterClosed();
  }
}
