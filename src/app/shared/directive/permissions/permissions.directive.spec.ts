import { Component, DebugElement, ViewContainerRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PermissionsDirective } from './permissions.directive';
import { PermissionsService } from './permissions.service';

@Component({
  template: `
    <div>Without Directive</div>
    <div *appPermissions="['teste']">Default</div>
  `,
})
class TestComponent {}

describe('PermissionsDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  let permissionsServiceSpy: jasmine.SpyObj<PermissionsService>;
  let viewContainerSpy: jasmine.SpyObj<ViewContainerRef>;

  beforeEach(() => {
    permissionsServiceSpy = jasmine.createSpyObj('PermissionsService', [
      'isEmpty',
      'loadPermissionsDatabase',
      'preparePermissions',
      'preparePermission',
    ]);

    viewContainerSpy = jasmine.createSpyObj('ViewContainerRef', [
      'createEmbeddedView',
      'clear',
    ]);

    TestBed.configureTestingModule({
      declarations: [PermissionsDirective, TestComponent],
      providers: [
        { provide: PermissionsService, useValue: permissionsServiceSpy },
        { provide: ViewContainerRef, useValue: viewContainerSpy },
      ],
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(PermissionsDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([appPermissions])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });
});
