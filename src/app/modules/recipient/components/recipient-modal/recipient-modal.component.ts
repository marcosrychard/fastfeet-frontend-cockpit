import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-recipient-modal',
  templateUrl: './recipient-modal.component.html',
  styleUrls: ['./recipient-modal.component.scss']
})
export class RecipientModalComponent implements OnInit {
  public title: string;
  public message: string;

  constructor(public dialogRef: MatDialogRef<RecipientModalComponent>) { }

  ngOnInit(): void {
  }

  public onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
