import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class EnvConfigService {
  private config = null;
  private env = null;

  constructor(private httpClient: HttpClient) {}

  public getConfig(key: any) {
    if (!Array.isArray(key)) {
      return this.config[key];
    }
    let res = this.config;
    key.forEach(k => (res = res[k]));
    return res;
  }

  public getEnv(key: any) {
    return this.env[key];
  }

  public load() {
    return new Promise((resolve, _) => {
      this.httpClient
        .get("./assets/env/env.json")
        .pipe(
          catchError(error => {
            console.log('Configuration file "env.json" could not be read');
            resolve(true);
            return throwError(error.json().error || "Server error");
          })
        )
        .subscribe(envResponse => {
          this.env = envResponse;
          let request = null;

          switch (envResponse["env"]) {
            case "production":
              {
                request = this.httpClient.get(
                  "./assets/env/env." + envResponse["env"] + ".json"
                );
              }
              break;

            case "development":
              {
                request = this.httpClient.get(
                  "./assets/env/env." + envResponse["env"] + ".json"
                );
              }
              break;

            case "default":
              {
                console.error("Environment file is not set or invalid");
                resolve(true);
              }
              break;
          }

          if (request) {
            request
              .pipe(
                catchError(error => {
                  console.log(
                    'Configuration file "env.json" could not be read'
                  );
                  resolve(true);
                  return throwError(error || "Server error");
                })
              )
              .subscribe((responseData: any) => {
                this.config = responseData;

                resolve(true);
              });
          } else {
            console.error('Env config file "env.json" is not valid');
            resolve(true);
          }
        });
    });
  }
}
