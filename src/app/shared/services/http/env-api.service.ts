import { Injectable } from "@angular/core";
import { EnvConfigService } from "./env-config.service";

@Injectable({
  providedIn: "root",
})
export class EnvApiService {
  private api_root = "";
  constructor(private config: EnvConfigService) {
    this.api_root = config.getConfig("api_root");
  }

  getApiDelivery() {
    return this.api_root + this.config.getConfig("delivery");
  }

  getApiDeliveryman() {
    return this.api_root + this.config.getConfig("deliveryman");
  }

  getApiRecipient() {
    return this.api_root + this.config.getConfig("recipient");
  }

  getApiDeliveryProblem(){
    return this.api_root + this.config.getConfig("delivery_problem");
  }

  getApiAuth(){
    return this.api_root + this.config.getConfig("auth");
  }
}
