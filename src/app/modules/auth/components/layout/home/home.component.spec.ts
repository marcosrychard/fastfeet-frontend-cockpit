import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ThemeService } from 'src/app/shared/services/theme/theme.service';
import { HomeComponent } from './home.component';
import { of } from 'rxjs';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let themeServiceSpy: jasmine.SpyObj<ThemeService>

  beforeEach(() => {

    themeServiceSpy = jasmine.createSpyObj('ThemeService', ['getTextFromFile']);

    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [HomeComponent],
      providers: [{ provide: ThemeService, useValue: themeServiceSpy }]
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
      themeServiceSpy.getTextFromFile.and.returnValue(of());
      component.ngOnInit();
      expect(component.getTextFromFile).toHaveBeenCalled();

    });
  });

  describe('getTextFromFile', () => {
    it('makes expected calls', () => {

      themeServiceSpy.getTextFromFile.and.returnValue(of([]));
      component.getTextFromFile();

      expect(themeServiceSpy.getTextFromFile).toHaveBeenCalled();
    });
  });
});
