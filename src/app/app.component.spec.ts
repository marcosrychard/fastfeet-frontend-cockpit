import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import { NO_ERRORS_SCHEMA, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './shared/modules/default.module';
import { AppRoutingModule } from './app-routing.module';
import { ThemeModule } from './theme/theme.module';
import { AppStoreModule } from './store';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { EnvConfigService } from './shared/services/http/env-config.service';
import { IconService } from './shared/services/commons/icon.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, "assets/i18n/", ".json");
}

export function InitEnvConfigFactory(config: EnvConfigService) {
  return () => config.load();
}

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,
        HttpClientModule,
        BrowserModule,
        BrowserAnimationsModule,
        DefaultModule,
        AppRoutingModule,
        ThemeModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient],
          },
        })],
      declarations: [AppComponent],
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: InitEnvConfigFactory,
          deps: [EnvConfigService, IconService],
          multi: true,
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

});
