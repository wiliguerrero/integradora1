
import { NgModule, Component } from '@angular/core';


// Components

import { EmployeeComponent } from './components/employees/employees.component';
import { Employees2Component } from './components/employees2/employees2.component';
import{ RouterModule,Routes}from '@angular/router';



const appRoutes: Routes = [
  {path:'employees', component:EmployeeComponent},
  {path:'employees2', component:Employees2Component},
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]

})
export class AppRoutingModule { }
export const routingComponents=[EmployeeComponent,Employees2Component]