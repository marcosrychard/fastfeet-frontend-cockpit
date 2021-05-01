import {
  Directive,
  Input,



  OnChanges, OnInit, TemplateRef,
  ViewContainerRef
} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth/auth.service';


@Directive({
  selector: '[appClaims]',
})
export class ClaimsDirective implements OnInit, OnChanges {
  @Input('appClaims') hasClaims: string | Array<string>;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private authService: AuthService
  ) {}

  ngOnChanges(): void {
    this.updateView(this.hasClaims);
  }

  ngOnInit(): void {}

  private updateView(claims: string | Array<string>) {
    if (this.checkClaim(claims)) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  checkClaim(claims: string | Array<string>): boolean {
    const claimsLocalStoge = this.authService.getDataUserStorage()?.user
      ?.claims;

    return typeof claims === 'string'
      ? this.verifyOneClaim(claims, claimsLocalStoge)
      : this.validClaimList(claims, claimsLocalStoge);
  }

  verifyOneClaim(claim: string, userClaims = []) {
    if (claim && userClaims && userClaims.length) {
      const result = this.buidClaims([], userClaims, true);

      return result && !!result.userClaims.includes(claim);
    }
  }

  validClaimList(hasClaims = [], userClaims = []) {
    if (hasClaims && hasClaims.length && userClaims && userClaims.length) {
      const result = this.buidClaims(hasClaims, userClaims, true);

      return (
        result &&
        !!result.hasClaims.filter((claim) => result.userClaims.includes(claim))
          .length
      );
    }
  }

  buidClaims(hasClaims = [], userClaims = [], isList: boolean) {
    if (isList) {
      return {
        hasClaims: hasClaims.map((claim) => Object.values(claim).toString()),
        userClaims,
      };
    } else {
      return {
        userClaims,
      };
    }
  }
}
