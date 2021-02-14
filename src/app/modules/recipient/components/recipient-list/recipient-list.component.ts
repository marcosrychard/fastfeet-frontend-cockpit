import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { displayedColumns } from '../../../../core/constants/recipient.constant';
import { RecipientDialogsService } from '../../../../shared/services/recipient/deliveryman-dialogs.service';

@Component({
  selector: 'app-recipient-list',
  templateUrl: './recipient-list.component.html',
  styleUrls: ['./recipient-list.component.scss']
})
export class RecipientListComponent implements OnInit {
  public displayedColumns = displayedColumns;
  public dataSource = [];
  public result: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogsService: RecipientDialogsService) { }

  ngOnInit(): void {
    this.findAllRecipients();
  }

  private findAllRecipients(): void {
    const { results } = this.route.snapshot.data.recipients;
    this.dataSource = results || [];
  }

  public goForm(data: any) {
    this.router.navigate(['/cockpit/recipient/form/' + data.id]);
  }

  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe((res) => (this.result = res));
  }
}
