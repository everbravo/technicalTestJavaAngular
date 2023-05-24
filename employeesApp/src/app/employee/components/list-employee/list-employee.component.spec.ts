import { ComponentFixture, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule
} from '@angular/common/http/testing';


import { ListEmployeeComponent } from './list-employee.component';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('ListEmployeeComponent', () => {
  let component: ListEmployeeComponent;
  let fixture: ComponentFixture<ListEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEmployeeComponent ],
      imports: [HttpClientTestingModule, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should listEmployee', () => {
    fixture = TestBed.createComponent(ListEmployeeComponent);
    component = fixture.componentInstance;

    expect(component.getEmployees()).toBeUndefined();
  });

  it('text should be equals to "T"', () => {
    const fixture = TestBed.createComponent(ListEmployeeComponent);
    const app = fixture.componentInstance;
    expect(app.role).toEqual('T');
  });

  it('firstSearch should be equals to "true"', () => {
    const fixture = TestBed.createComponent(ListEmployeeComponent);
    const app = fixture.componentInstance;
    expect(app.firstSearch).toEqual(true);
  });

  it('employees should be equals to "[]"', () => {
    const fixture = TestBed.createComponent(ListEmployeeComponent);
    const app = fixture.componentInstance;
    expect(app.employees).toEqual([]);
  });
});
