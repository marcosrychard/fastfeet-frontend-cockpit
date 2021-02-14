import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryDialogsService } from './delivery-dialogs.service';

describe('DeliveryDialogsService', () => {
  let service: DeliveryDialogsService;

  beforeEach(() => {
    const matDialogStub = () => ({ open: deliveryModalComponent => ({}) });
    TestBed.configureTestingModule({
      providers: [
        DeliveryDialogsService,
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    service = TestBed.inject(DeliveryDialogsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
