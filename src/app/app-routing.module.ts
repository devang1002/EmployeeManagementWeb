import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeaddressDetailComponent } from './components/employeeaddress-detail/employeeaddress-detail.component';
import { EmployeeaddressListComponent } from './components/employeeaddress-list/employeeaddress-list.component';
import { EmployeeFamilyDetailDetailComponent } from './components/employeefamilydetail-detail/employeefamilydetail-detail.component';
import { EmployeeFamilyDetailListComponent } from './components/employeefamilydetail-list/employeefamilydetail-list.component';



const routes: Routes = [

  {
    path: '',
    component: EmployeeListComponent
  },
  {
    path: 'employee-details',
    component: EmployeeDetailsComponent
  },
  {
    path: 'employee-details/:id',
    component: EmployeeDetailsComponent
  },
  {
    path: 'employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'employeeaddress-details',
    component: EmployeeaddressDetailComponent
  },
  {
    path: 'employeeaddress-details/:id',
    component: EmployeeaddressDetailComponent
  },
  {
    path: 'employeeaddress-list',
    component: EmployeeaddressListComponent
  },
  {
    path: 'employeefamilydetail-details',
    component: EmployeeFamilyDetailDetailComponent
  },
  {
    path: 'employeefamilydetail-details/:id',
    component: EmployeeFamilyDetailDetailComponent
  },
  {
    path: 'employeefamilydetail-list',
    component:EmployeeFamilyDetailListComponent
  },
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
