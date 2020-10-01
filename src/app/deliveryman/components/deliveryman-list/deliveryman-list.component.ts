import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { displayedColumns } from '../../constants/deliveryman.constant';
import { DeliverymanDialogsService } from '../../services/deliveryman-dialogs.service';
@Component({
  selector: "app-deliveryman-list",
  templateUrl: "./deliveryman-list.component.html",
  styleUrls: ["./deliveryman-list.component.scss"],
})
export class DeliverymanListComponent implements OnInit {
  public displayedColumns = displayedColumns;
  public dataSource = [];
  public result: any;
  public claims = []

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dialogsService: DeliverymanDialogsService
  ) { }

  ngOnInit(): void {
    this.findAllDeliveries();
    this.claims = this.findClaims();
  }

  public goForm(data: any) {
    this.router.navigate(["/cockpit/deliveryman/form/" + data.id]);
  }

  private findAllDeliveries(): void {
    this.dataSource = this.route.snapshot.data["deliverymans"]?.results || [];
  }

  private findClaims() {
    return this.route.snapshot.data["claims"]
  }

  public openDialog() {
    this.dialogsService
      .confirm("Confirm Dialog", "Are you sure you want to do this?")
      .subscribe((res) => (this.result = res));
  }
}
