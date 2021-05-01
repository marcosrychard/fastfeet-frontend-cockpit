import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss'],
})
export class Error404Component implements OnInit {
  app = {
    name: 'Jp Project - IS4Admin',
    description: 'IdentityServer4 Admin Panel',
    year: new Date().getFullYear(),
    version: environment.VESION,
  };

  constructor() {}

  ngOnInit(): void {}
}
