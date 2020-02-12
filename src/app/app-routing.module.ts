import { NgModule } from '@angular/core';
import {RouterModule , Routes } from '@angular/router';

import { CreateEmployeeComponent } from './employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees.component';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from './page-not-found.component';

// const routes: Routes = [];
const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'list', component: ListEmployeesComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'edit/:id', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // wild card route
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
