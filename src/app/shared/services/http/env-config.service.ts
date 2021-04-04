import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class EnvConfigService {
  private config = null;
  private env = null;

  constructor(private httpClient: HttpClient) {}

  public getConfig(key: any) {
    if (!Array.isArray(key)) {
      return this.config[key];
    }

    let res = this.config;

    key.forEach((k) => (res = res[k]));

    return res;
  }

  public getEnv(key: any) {
    return this.env[key];
  }

  public load() {
    return new Promise((resolve, _) => {
      this.httpClient
        .get('./assets/env/env.json')
        .subscribe((envResponse: any) => {
          this.env = envResponse.env;

          if (this.env) {
            this.httpClient.get(`./assets/env/env.${this.env}.json`).subscribe(
              (responseData) => {
                this.config = responseData;

                resolve(true);
              },
              (error) => {
                console.log('Configuration file "env.json" could not be read');
                resolve(true);
                return throwError(error || 'Server error');
              }
            );
          } else {
            console.error('Env config file "env.json" is not valid');
            resolve(true);
          }
        });
    });
  }
}
