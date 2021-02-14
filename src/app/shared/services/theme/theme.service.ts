import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(private http: HttpClient) { }

  public getColorFromFile(): Observable<any> {
    return this.http
      .get(environment.CONFIG_FILE_COLOR)
      .pipe(tap(this.setTheme));
  }

  public getImgFromFile(): Observable<any> {
    return this.http.get(environment.CONFIG_FILE_IMG);
  }

  public getTextFromFile(): Observable<any> {
    return this.http.get(environment.CONFIG_FILE_TEXT);
  }

  public setTheme(colors = []) {
    colors.forEach((color) => {
      for (const key of Object.keys(color)) {
        document.documentElement.style.setProperty(key, color[key]);
      }
    });
  }

  public applyFullTheme() {
    return forkJoin([this.getColorFromFile(), this.getImgFromFile(), this.getTextFromFile()]);
  }
}
