import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { displayedColumns } from '../../../../core/constants/delivery-problems.constant';

@Component({
  selector: 'app-delivery-problem-list',
  templateUrl: './delivery-problem-list.component.html',
  styleUrls: ['./delivery-problem-list.component.scss'],
})
export class DeliveryProblemListComponent implements OnInit {
  public displayedColumns = displayedColumns;
  public dataSource = [];
  public result: any;

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAlldeliveryProblems();
  }

  private findAlldeliveryProblems(): void {
    const { results } = this.route.snapshot.data.deliveryProblems;
    this.dataSource = results || [];
  }
}
