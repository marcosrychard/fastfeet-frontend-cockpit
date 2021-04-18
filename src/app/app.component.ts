import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from './shared/services/theme/theme.service';
import { environment } from 'src/environments/environment';

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
    private themService: ThemeService
  ) {
    translate.setDefaultLang('pt');
    translate.use('pt');
    themService.applyFullTheme().subscribe();


    console.log(environment)
  }
}
