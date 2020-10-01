import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  constructor(private http: HttpClient) {}

  public getColorFromFile() {
    return this.http
      .get(environment.CONFIG_FILE_COLOR)
      .pipe(tap((res: any) => this.setTheme(res)));
  }

  public getImgFromFile() {
    return this.http.get(environment.CONFIG_FILE_IMG);
  }

  public getTextFromFile() {
    return this.http.get(environment.CONFIG_FILE_TEXT);
  }

  private setTheme(colors = []) {
    colors.forEach((color) => {
      for (const key of Object.keys(color)) {
        document.documentElement.style.setProperty(key, color[key]);
      }
    });
  }
}
