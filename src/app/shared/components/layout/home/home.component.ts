import { Component, OnInit } from "@angular/core";
import { ThemeService } from "src/app/theme/theme.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  public text:any;
  public loading = true

  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    this.getTextFromFile();
  }
  getTextFromFile() {
    this.themeService.getTextFromFile().subscribe((res) =>{
      this.text = res;
      this.loading = false;
    });
  }
}
