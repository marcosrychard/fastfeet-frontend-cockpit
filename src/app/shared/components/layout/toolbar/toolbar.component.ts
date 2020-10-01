import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ToolbarClaimsHash } from 'src/app/shared/claims-hash/toolbar-claims.hash';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  public dataAuth = null;
  public claims = ToolbarClaimsHash

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.getDataUserStorage();
  }

  getDataUserStorage() {
    this.dataAuth = this.authService.getDataUserStorage()
  }

  public logout() {
    this.authService.logout();
  }


}
