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
});
