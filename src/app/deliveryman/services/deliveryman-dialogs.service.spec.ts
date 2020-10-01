import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DeliverymanDialogsService } from './deliveryman-dialogs.service';
describe('DeliverymanDialogsService', () => {
  let service: DeliverymanDialogsService;
  beforeEach(() => {
    const matDialogStub = () => ({ open: deliverymanModalComponent => ({}) });
    TestBed.configureTestingModule({
      providers: [
        DeliverymanDialogsService,
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    service = TestBed.get(DeliverymanDialogsService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
