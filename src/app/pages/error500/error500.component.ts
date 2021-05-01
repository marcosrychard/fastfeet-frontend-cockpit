import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-error500',
  templateUrl: './error500.component.html',
  styleUrls: ['./error500.component.scss'],
})
export class Error500Component implements OnInit {
  app = {
    name: 'Jp Project - IS4Admin',
    description: 'IdentityServer4 Admin Panel',
    year: new Date().getFullYear(),
    version: environment.VESION,
  };

  constructor() {}

  ngOnInit(): void {}
}
