import { environment } from 'src/environments/environment';

export abstract class LocalStorageUtils {

  public static getDataUserStorage() {
    return JSON.parse(localStorage.getItem(environment.DATA_USER));
  }

  public static setDataUsertorage(token: any) {
    localStorage.setItem(environment.DATA_USER, JSON.stringify(token));
  }

  public static removeDataUserStorage() {
    localStorage.removeItem(environment.DATA_USER);
  }
}
