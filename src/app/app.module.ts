import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnvConfigService } from './shared/services/http/env-config.service';
import { DefaultModule } from './core/modules/default.module';
import { IconService } from './shared/services/commons/icon.service';
import { AppStoreModule } from './core/store';
import { JwtInterceptor } from './shared/helpers/jwt-interceptor/jwt.interceptor.helpers';
import { ErrorInterceptor } from './shared/helpers/error-interceptor/error.interceptor.helpers';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

export function InitEnvConfigFactory(config: EnvConfigService) {
  return () => config.load();
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    DefaultModule,
    AppRoutingModule,
    AppStoreModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  exports: [DefaultModule],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: InitEnvConfigFactory,
      deps: [EnvConfigService, IconService],
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
