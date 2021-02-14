import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { TypeActionEnum } from '../../../core/enums/type-action.enum';

@Component({
  selector: 'app-page-header-form',
  templateUrl: './page-header-form.component.html',
  styleUrls: ['./page-header-form.component.scss'],
})
export class PageHeaderFormComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() linkBack: string;
  @Input() typeAction: string;
  @Output() nameTypeAction = new EventEmitter();

  public name: any;

  constructor() {}

  ngOnChanges(): void {
    this.name = this.buildName(this.typeAction);
  }

  ngOnInit(): void {}

  private buildName(typeAction: string) {
    if (typeAction === TypeActionEnum.CREATE) {
      return {
        label: 'CRIAR',
        value: TypeActionEnum.CREATE,
      };
    } else if (typeAction === TypeActionEnum.UPDATE) {
      return {
        label: 'ATUALIZAR',
        value: TypeActionEnum.UPDATE,
      };
    }
  }

  public submit() {
    this.nameTypeAction.emit(this.name.value);
  }
}
