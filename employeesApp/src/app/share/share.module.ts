import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { EmployeeModule } from '../employee/employee.module';



@NgModule({
  declarations: [
    HomePageComponent,
    EmployeePageComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    EmployeeModule
  ],
  exports:[
    HomePageComponent,
    EmployeePageComponent,
    SidebarComponent
  ]
})
export class ShareModule { }
