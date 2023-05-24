import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './share/pages/home-page/home-page.component';
import { EmployeePageComponent } from './share/pages/employee-page/employee-page.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
    {
        path: 'home',
        component: HomePageComponent
    },
    {
        path: 'list',
        component: EmployeePageComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HttpClientModule
    ],
    exports:[
        RouterModule,
    ]
})
export class AppRoutingModule { }
