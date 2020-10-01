import { NgModule } from "@angular/core";
import { ThemeDirective } from "./theme.directive";
import { DefaultModule } from "../shared/modules/default.module";

@NgModule({
  imports: [DefaultModule],
  declarations: [ThemeDirective],
  exports: [ThemeDirective],
})
export class ThemeModule {}
