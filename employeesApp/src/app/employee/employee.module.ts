import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { ListEmployeeComponent } from './components/list-employee/list-employee.component';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ListEmployeeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    AddEmployeeComponent,
    ListEmployeeComponent
  ]
})
export class EmployeeModule { }
