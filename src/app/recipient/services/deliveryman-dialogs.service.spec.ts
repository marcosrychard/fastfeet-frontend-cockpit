import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { RecipientDialogsService } from './deliveryman-dialogs.service';
describe('RecipientDialogsService', () => {
  let service: RecipientDialogsService;
  beforeEach(() => {
    const matDialogStub = () => ({ open: recipientModalComponent => ({}) });
    TestBed.configureTestingModule({
      providers: [
        RecipientDialogsService,
        { provide: MatDialog, useFactory: matDialogStub }
      ]
    });
    service = TestBed.get(RecipientDialogsService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
});
