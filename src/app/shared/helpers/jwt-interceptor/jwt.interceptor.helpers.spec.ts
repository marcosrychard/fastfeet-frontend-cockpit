import { TestBed } from '@angular/core/testing';
import { JwtInterceptor } from './jwt.interceptor.helpers';

describe('JwtInterceptor', () => {
  let service: JwtInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [JwtInterceptor] });
    service = TestBed.inject(JwtInterceptor);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('intercept', () => {
    it('makes expected calls', () => {
      const httpRequestStub = {} as any;
      const httpHandlerStub = {} as any;

      spyOn(httpRequestStub, 'clone').and.callThrough();
      spyOn(httpHandlerStub, 'handle').and.callThrough();

      service.intercept(httpRequestStub, httpHandlerStub);

      expect(httpRequestStub.clone).toHaveBeenCalled();
      expect(httpHandlerStub.handle).toHaveBeenCalled();
    });
  });
});
