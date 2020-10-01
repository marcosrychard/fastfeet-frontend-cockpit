import { Component } from "@angular/core";
import { Subscription } from "rxjs";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "fastfeet-frontend-cockpit";
  subscriptions = new Subscription();
  loader = false;

  constructor(
    public translate: TranslateService
  ) {
    translate.setDefaultLang("pt");
    translate.use("pt");
  }
}
