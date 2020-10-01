import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ThemeService } from './theme.service';
import { ThemeDirective } from './theme.directive';

@Component({
  template: `
    <div>Without Directive</div>
    <div appTheme>Default</div>
  `
})
class TestComponent {}

describe('ThemeDirective', () => {
  let fixture: ComponentFixture<TestComponent>;
  let elementsWithDirective: Array<DebugElement>;
  let bareElement: DebugElement;
  beforeEach(() => {
    const themeServiceStub = () => ({
      getColorFromFile: () => ({}),
      getImgFromFile: () => ({}),
      getTextFromFile: () => ({})
    });
    TestBed.configureTestingModule({
      declarations: [ThemeDirective, TestComponent]
    });
    fixture = TestBed.createComponent(TestComponent);
    fixture.detectChanges();
    elementsWithDirective = fixture.debugElement.queryAll(
      By.directive(ThemeDirective)
    );
    bareElement = fixture.debugElement.query(By.css(':not([appTheme])'));
  });
  it('should have bare element', () => {
    expect(bareElement).toBeTruthy();
  });
  it('should have 1 element(s) with directive', () => {
    expect(elementsWithDirective.length).toBe(1);
  });
});
