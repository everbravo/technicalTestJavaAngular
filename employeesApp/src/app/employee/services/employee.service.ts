import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee.interfaces';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private apiUrl: string = "http://localhost:8080/employees/v0"

  constructor(private http: HttpClient) { }

  addEmployee( employee: Employee ) : Observable<Employee> {
    const url = `${this.apiUrl}/addEmployee`;
    
    return this.http.post<Employee>(url, employee);

  }

  listEmployees( termino:string ): Observable<Employee[]> {
    const url = `${this.apiUrl}/listEmployee/${termino}`;

    return this.http.get<Employee[]>(url);
  }


}
