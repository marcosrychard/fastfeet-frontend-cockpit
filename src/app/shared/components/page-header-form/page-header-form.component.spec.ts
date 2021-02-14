import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PageHeaderFormComponent } from './page-header-form.component';

describe('PageHeaderFormComponent', () => {
  let component: PageHeaderFormComponent;
  let fixture: ComponentFixture<PageHeaderFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PageHeaderFormComponent]
    });
    fixture = TestBed.createComponent(PageHeaderFormComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
