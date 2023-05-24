import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';


import { EmployeePageComponent } from './employee-page.component';
import { ListEmployeeComponent } from 'src/app/employee/components/list-employee/list-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('EmployeePageComponent', () => {
  let component: EmployeePageComponent;
  let fixture: ComponentFixture<EmployeePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePageComponent, ListEmployeeComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
