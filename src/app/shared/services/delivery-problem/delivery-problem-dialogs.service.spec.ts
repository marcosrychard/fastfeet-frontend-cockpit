import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { DeliverydProblemDialogsService } from './delivery-problem-dialogs.service';

describe('DeliverydProblemDialogsService', () => {
  let service: DeliverydProblemDialogsService;

  beforeEach(() => {
    const matDialogStub = () => ({
      open: deliveryProblemModalViewComponent => ({})
    });
    TestBed.configureTestingModule({
      providers: [
        DeliverydProblemDialogsService,
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    service = TestBed.inject(DeliverydProblemDialogsService);
  });

  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
