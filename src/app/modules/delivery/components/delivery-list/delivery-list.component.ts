import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { displayedColumns } from '../../../../core/constants/delivery.constant';
import { DeliveryDialogsService } from '../../../../shared/services/delivery/delivery-dialogs.service';
import { ClaimService } from 'src/app/shared/services/claims/claim.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnInit {
  displayedColumns = displayedColumns;
  public dataSource = [];
  public address = '';
  public claims = 'ADMIN'; // localStorage ;
  public result: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private claimService: ClaimService,
    private dialogsService: DeliveryDialogsService
  ) { }

  ngOnInit(): void {
    this.findAllDeliveries();
    this.checkHasClaim();
  }

  goForm(data: any) {
    this.router.navigate(['/cockpit/delivery/form/' + data.id]);
  }

  findAllDeliveries() {
    this.dataSource = this.route.snapshot.data.deliveries?.results || [];
    // this.dataSource = results.sort((a: any, b: any) => a.id - b.id) || [];
  }

  checkHasClaim() {
    this.claimService.checkHasClaim(this.claims);
  }

  public openDialog() {
    this.dialogsService
      .confirm('Confirm Dialog', 'Are you sure you want to do this?')
      .subscribe((res) => (this.result = res));
  }
}
