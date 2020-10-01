import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class DefaultService {
  constructor() {}

  removeAccents(s: string) {
    const i = "ÀÁÂÃÄÅàáâãäåÒÓÔÕÕÖØòóôõöøÈÉÊËèéêëðÇçÐÌÍÎÏìíîïÙÚÛÜùúûüÑñŠšŸÿýŽž".split("");
    const o = "AAAAAAaaaaaaOOOOOOOooooooEEEEeeeeeCcDIIIIiiiiUUUUuuuuNnSsYyyZz".split("");
    const map = {};
    i.forEach((el, idx) => (map[el] = o[idx]));
    return s.replace(/[^A-Za-z0-9]/g, ch => map[ch] || ch).toLowerCase();
  }
}
