import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  template: `<section>
    <app-toolbar></app-toolbar>
    <div class="container"><router-outlet></router-outlet></div>
  </section>`,
})
export class CockpitComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
