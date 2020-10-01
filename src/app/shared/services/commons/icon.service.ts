import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor(private domSanitizer: DomSanitizer, public icons: MatIconRegistry) {
    icons.addSvgIcon('fastfeet-logo', domSanitizer.bypassSecurityTrustResourceUrl('./assets/imgs/svg/fastfeet-logo.svg'));
  }
}
