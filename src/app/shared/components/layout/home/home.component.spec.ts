import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ThemeService } from 'src/app/theme/theme.service';
import { HomeComponent } from './home.component';
describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  beforeEach(() => {
    const themeServiceStub = () => ({
      getTextFromFile: () => ({ subscribe: f => f({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [{ provide: ThemeService, useFactory: themeServiceStub }]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it(`loading has default value`, () => {
    expect(component.loading).toEqual(true);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getTextFromFile').and.callThrough();
      component.ngOnInit();
      expect(component.getTextFromFile).toHaveBeenCalled();
    });
  });
  describe('getTextFromFile', () => {
    it('makes expected calls', () => {
      const themeServiceStub: ThemeService = fixture.debugElement.injector.get(
        ThemeService
      );
      spyOn(themeServiceStub, 'getTextFromFile').and.callThrough();
      component.getTextFromFile();
      expect(themeServiceStub.getTextFromFile).toHaveBeenCalled();
    });
  });
});
