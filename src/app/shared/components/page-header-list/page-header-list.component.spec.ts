import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { PageHeaderListComponent } from './page-header-list.component';

describe('PageHeaderListComponent', () => {
  let component: PageHeaderListComponent;
  let fixture: ComponentFixture<PageHeaderListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [PageHeaderListComponent]
    });
    fixture = TestBed.createComponent(PageHeaderListComponent);
    component = fixture.componentInstance;
  });

  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
});
