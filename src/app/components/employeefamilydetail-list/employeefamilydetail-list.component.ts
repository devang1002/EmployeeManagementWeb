import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import{MatFormFieldModule} from '@angular/material/form-field';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import {MatTableModule  } from "@angular/material/table";
import {MatSort, MatSortModule} from "@angular/material/sort";
import { MatInputModule } from "@angular/material/input";
import { ApiService } from 'src/app/services/api.service';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule  } from "@angular/material/icon";
import {  RouterModule } from '@angular/router';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import { EmployeeFamilyDetailDetailComponent } from '../employeefamilydetail-detail/employeefamilydetail-detail.component';



@Component({
  selector: 'app-employeefamilydetail-list',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTableModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSortModule,
    MatIconModule,
    MatDialogModule,
    RouterModule,
    MatProgressBarModule],
   
  templateUrl: './employeefamilydetail-list.component.html',
  styleUrls: ['./employeefamilydetail-list.component.scss']
})
export class EmployeeFamilyDetailListComponent {
  displayedColumns: string[] = ['firstName','middleName', 'lastName','dob','employeeId','relationId', 'action'];
  dataSource!:MatTableDataSource<any>;
  /**
   *
  */
 @ViewChild(MatSort) sort!:MatSort
 @ViewChild(MatPaginator) paginator!:MatPaginator


 constructor(public apiService:ApiService,
 // public loaderservive:LoaderService,
  private _dialog:MatDialogModule,
  private dialog:MatDialog) {
   const Users=Array.from({length:100},)
   this.dataSource = new MatTableDataSource()
   this.getEmployeeFamilyDetail();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEmployeeFamilyDetail(){
    
    // console.log(this.Userform)
    this.apiService.getAllEmployeeFamilyDetail()
    .subscribe({
      next:(result)=>
      {
        console.log(result)
        this.dataSource=new MatTableDataSource(result);
        this.dataSource.sort=this.sort;
        this.dataSource.paginator=this.paginator;
        // this.Userform=result
      }
    })
  }

  deleteemployeefamilydetail(id:string,employeefamilydetail:any){
    if(confirm('Are you sure to delete'))
    this.apiService.deleteEmployeeFamilyDetail(id)
    .subscribe({
      next:(response)=>{
        this.getEmployeeFamilyDetail();
      }
    });
  }
  openemployeefamilydetail(){
    // debugger
    const dialogRef = this.dialog.open(EmployeeFamilyDetailDetailComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => {
          if(val){
            this.getEmployeeFamilyDetail();
          }
      },
    });
  }
  updateemployeefamilydetail(data:any){
    const dialogRef = this.dialog.open(EmployeeFamilyDetailDetailComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val) => {
          if(val){
            this.getEmployeeFamilyDetail();
          }
      },
    });
  } 
}
 
 
