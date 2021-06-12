import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ThemeService } from './theme.service';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ThemeService],
    });
    service = TestBed.inject(ThemeService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });

  describe('getColorFromFile', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getColorFromFile().subscribe((res) => {
        expect(res).toEqual([]);
      });

      const req = httpTestingController.expectOne(
        'assets/files/color/color.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getImgFromFile', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getImgFromFile().subscribe((res) => {
        expect(res).toEqual([]);
      });

      const req = httpTestingController.expectOne(
        'assets/files/images/images.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });

  describe('getTextFromFile', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.inject(HttpTestingController);
      service.getTextFromFile().subscribe((res) => {
        expect(res).toEqual([]);
      });

      const req = httpTestingController.expectOne(
        'assets/files/text/text.json'
      );
      expect(req.request.method).toEqual('GET');
      req.flush([]);
      httpTestingController.verify();
    });
  });
});
