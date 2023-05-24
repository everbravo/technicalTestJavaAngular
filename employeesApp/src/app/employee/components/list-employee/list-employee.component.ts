import { Component } from '@angular/core';
import { Employee } from '../../interfaces/employee.interfaces';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  constructor(private service: EmployeeService){
  }

  public role: string = "T";
  public firstSearch: boolean = true;

  public employees: Employee[] = [];

  getEmployees(): void{
    this.service.listEmployees(this.role).subscribe({
      next: (emp) => {
        this.employees = emp;
      }, 
      error: (err) => {
        this.employees = [];
        console.log("error");
      }
    });
    this.firstSearch = false;
    console.log(this.employees);
  }

}
