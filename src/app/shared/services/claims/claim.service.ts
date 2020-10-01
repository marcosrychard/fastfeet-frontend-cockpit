import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ClaimService {
  constructor() { }

  checkHasClaim(claims: string | Array<string>): boolean {
    // get localStoge
    const claimsLocalStoge = ["USER", "ADMIN"];;

    return typeof claims === "string"
      ? this.verifyOneClaim(claims, claimsLocalStoge)
      : this.validClaimList(claims, claimsLocalStoge);
  }

  verifyOneClaim(claim: string, claimsLocalStoge = []) {
    return !!claimsLocalStoge.includes(claim);
  }

  validClaimList(claimsList = [], claimsLocalStoge = []) {
    return !!claimsList.filter((claim) => claimsLocalStoge.includes(claim)).length;
  }
}
