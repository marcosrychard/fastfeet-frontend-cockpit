import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RecipientDialogsService } from '../../services/deliveryman-dialogs.service';
import { displayedColumns } from '../../constants/recipient.constant';
import { RecipientListComponent } from './recipient-list.component';
describe('RecipientListComponent', () => {
  let component: RecipientListComponent;
  let fixture: ComponentFixture<RecipientListComponent>;
  beforeEach(() => {
    const activatedRouteStub = () => ({ snapshot: { data: {} } });
    const routerStub = () => ({ navigate: array => ({}) });
    const recipientDialogsServiceStub = () => ({
      confirm: (string, string1) => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [RecipientListComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        { provide: Router, useFactory: routerStub },
        {
          provide: RecipientDialogsService,
          useFactory: recipientDialogsServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(RecipientListComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`displayedColumns has default value`, () => {
    expect(component.displayedColumns).toEqual(displayedColumns);
  });
  it(`dataSource has default value`, () => {
    expect(component.dataSource).toEqual([]);
  });
  describe('openDialog', () => {
    it('makes expected calls', () => {
      const recipientDialogsServiceStub: RecipientDialogsService = fixture.debugElement.injector.get(
        RecipientDialogsService
      );
      spyOn(recipientDialogsServiceStub, 'confirm').and.callThrough();
      component.openDialog();
      expect(recipientDialogsServiceStub.confirm).toHaveBeenCalled();
    });
  });
});
