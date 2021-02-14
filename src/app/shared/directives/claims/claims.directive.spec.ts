import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ClaimsDirective } from './claims.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appClaims>Default</div>
  `
})
class TestComponent { }

describe('ClaimsDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;

  beforeEach(() => {
    const templateRefStub = () => ({});
    const viewContainerRefStub = () => ({
      createEmbeddedView: templateRef => ({}),
      clear: () => ({})
    });

    const authServiceStub = () => ({ getDataUserStorage: () => ({}) });

    TestBed.configureTestingModule({
      declarations: [ClaimsDirective, TestComponent]
    });

    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();

    elementsWithDirective = fixture.debugElement.queryAll(By.directive(ClaimsDirective));

    bareElement = fixture.debugElement.query(By.css(':not([appClaims])'));
  });

  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });

  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
