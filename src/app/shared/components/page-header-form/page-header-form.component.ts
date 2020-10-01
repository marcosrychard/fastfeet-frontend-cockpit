import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from "@angular/core";
import { TypeActionEnum } from "../../enums/type-action.enum";

@Component({
  selector: "app-page-header-form",
  templateUrl: "./page-header-form.component.html",
  styleUrls: ["./page-header-form.component.scss"],
})
export class PageHeaderFormComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() link_back: string;
  @Input() type_action: string;
  @Output() onSubmit = new EventEmitter();

  public name: any;

  constructor() {}

  ngOnChanges(): void {
    this.name = this.buildName(this.type_action);
  }

  ngOnInit(): void {}

  private buildName(type_action: string) {
    if (type_action === TypeActionEnum.CREATE) {
      return {
        label: "CRIAR",
        value: TypeActionEnum.CREATE,
      };
    } else if (type_action === TypeActionEnum.UPDATE) {
      return {
        label: "ATUALIZAR",
        value: TypeActionEnum.UPDATE,
      };
    }
  }

  public submit() {
    this.onSubmit.emit(this.name.value);
  }
}
