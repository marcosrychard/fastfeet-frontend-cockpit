import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-page-header-list',
  templateUrl: './page-header-list.component.html',
  styleUrls: ['./page-header-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageHeaderListComponent implements OnInit {
  @Input() title: string;
  @Input() link: string;
  @Input() label: string;
  @Input() iconName: string;
  @Input() buttonName: string;
  @Input() isShowButton = true;

  constructor() {}

  ngOnInit(): void {}
}
