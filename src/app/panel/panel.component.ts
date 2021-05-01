import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  template: `<section>
    <app-toolbar></app-toolbar>
    <div class="container"><router-outlet></router-outlet></div>
  </section>`,
})
export class PanelComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
