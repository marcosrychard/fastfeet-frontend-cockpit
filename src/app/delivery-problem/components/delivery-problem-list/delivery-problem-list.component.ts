import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { displayedColumns } from '../../constants/delivery-problems.constant';
import { DeliverydProblemDialogsService } from '../../services/delivery-problem-dialogs.service';

@Component({
  selector: "app-delivery-problem-list",
  templateUrl: "./delivery-problem-list.component.html",
  styleUrls: ["./delivery-problem-list.component.scss"],
})
export class DeliveryProblemListComponent implements OnInit {
  public displayedColumns = displayedColumns;
  public dataSource = [];
  public result: any;

  constructor(
    private route: ActivatedRoute,
    private dialogsService: DeliverydProblemDialogsService
  ) { }

  ngOnInit(): void {
    this.findAlldeliveryProblems();
  }

  private findAlldeliveryProblems(): void {
    const { results } = this.route.snapshot.data["deliveryProblems"];
    this.dataSource = results || [];
  }

  public confirmModalView() {
    this.dialogsService
      .confirmModalView("Confirm Dialog", "Are you sure you want to do this?")
      .subscribe((res) => (this.result = res));
  }

  public confirmModalCancel() {
    this.dialogsService
      .confirmModalCancel("Confirm Dialog", "Are you sure you want to do this?")
      .subscribe((res) => (this.result = res));
  }
}
