import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { ThemeService } from './shared/services/theme/theme.service';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'fastfeet-frontend-cockpit';
  subscriptions = new Subscription();
  loader = false;

  constructor(
    public translate: TranslateService,
    public themService: ThemeService
  ) {
    translate.setDefaultLang('pt');
    translate.use('pt');
    themService.applyFullTheme().subscribe();
  }
}
