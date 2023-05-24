import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';
import { RouterTestingModule } from "@angular/router/testing";

import { AppComponent } from './app.component';
import { ShareModule } from './share/share.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports:[
        HttpClientTestingModule, RouterTestingModule, ShareModule
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'EmployeesApp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('EmployeesApp');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('span')).toBeTruthy();
  });
});
