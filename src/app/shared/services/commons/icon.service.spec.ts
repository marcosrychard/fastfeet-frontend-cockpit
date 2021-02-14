import { TestBed } from '@angular/core/testing';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { IconService } from './icon.service';

describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    const domSanitizerStub = () => ({
      bypassSecurityTrustResourceUrl: string => ({})
    });
    const matIconRegistryStub = () => ({ addSvgIcon: (string, arg) => ({}) });
    TestBed.configureTestingModule({
      providers: [
        IconService,
        { provide: DomSanitizer, useFactory: domSanitizerStub },
        { provide: MatIconRegistry, useFactory: matIconRegistryStub }
      ]
    });
    service = TestBed.inject(IconService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
