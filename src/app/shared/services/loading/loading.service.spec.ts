import { Overlay } from '@angular/cdk/overlay';
import { TestBed } from '@angular/core/testing';
import { OverlayRef } from 'ngx-toastr';
import { LoadingService } from './loading.service';

xdescribe('LoadingService', () => {
  let service: LoadingService;
  let overlaySpy: jasmine.SpyObj<Overlay>;

  beforeEach(() => {
    overlaySpy = jasmine.createSpyObj('Overlay', [
      'create',
      'position',
      'centerHorizontally',
      'centerVertically',
    ]);

    TestBed.configureTestingModule({
      providers: [
        { provide: Overlay, useValue: overlaySpy },
      ],
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
