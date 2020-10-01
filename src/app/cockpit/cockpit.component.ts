import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cockpit",
  template: `<section>
    <app-toolbar></app-toolbar>
    <router-outlet></router-outlet>
  </section>`,
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
