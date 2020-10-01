import { Directive, OnDestroy, OnInit } from "@angular/core";
import { ThemeService } from "./theme.service";
import { Subscription, forkJoin } from "rxjs";

@Directive({
  selector: "[appTheme]",
})
export class ThemeDirective implements OnInit, OnDestroy {
  private subscriptions = new Subscription();
  constructor(private themService: ThemeService) {}

  ngOnInit() {
    this.applyFullTheme();
  }

  private applyFullTheme() {
    this.subscriptions.add(
      forkJoin([
        this.themService.getColorFromFile(),
        this.themService.getImgFromFile(),
        this.themService.getTextFromFile(),
      ]).subscribe()
    );
  }

  ngOnDestroy() {
    if (this.subscriptions) this.subscriptions.unsubscribe();
  }
}
