import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';


import { HomePageComponent } from './home-page.component';
import { AddEmployeeComponent } from 'src/app/employee/components/add-employee/add-employee.component';
import { EmployeeService } from 'src/app/employee/services/employee.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageComponent, AddEmployeeComponent ],
      imports:[RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
