import { of, Observer } from 'rxjs';

function createResponse(body: any) {
  return of((observer: Observer<any>) => observer.next(body));
}

export default class MockHttp {
  get(list_mock = []) {
    return createResponse(list_mock);
  }
}

