import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-header-list',
  templateUrl: './page-header-list.component.html',
  styleUrls: ['./page-header-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageHeaderListComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;
  @Input() label: string;
  @Input() iconName: string;
  @Input() buttonName: string;

  constructor() { }

  ngOnInit(): void { }
}
