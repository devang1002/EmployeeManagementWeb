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
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@Component({
  selector: 'app-employee-list',
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
   
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  displayedColumns: string[] = ['empCode', 'firstName','middleName', 'lastName', 'email', 'mobile', 'gender','designation','phone','doj','dob', 'emergencyContectNo','emergencyContectName', 'action'];
  dataSource!:MatTableDataSource<any>;
  /**
   *
  */
 @ViewChild(MatSort) sort!:MatSort
 @ViewChild(MatPaginator) paginator!:MatPaginator

 constructor(public apiService:ApiService,
   private _dialog:MatDialogModule,
  private dialog:MatDialog) {
   const Users=Array.from({length:100},)
   this.dataSource = new MatTableDataSource()
   this.getEmployee();
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  getEmployee(){
    
    // console.log(this.Userform)
    this.apiService.getAllEmployee()
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

  deleteemployee(id:string,employee:any){
    if(confirm('Are you sure to delete'))
    this.apiService.deleteEmployee(id)
    .subscribe({
      next:(response)=>{
        this.getEmployee();
      }
    });
  }
  openemployee(){
    // debugger
    const dialogRef = this.dialog.open(EmployeeDetailsComponent);
    dialogRef.afterClosed().subscribe({
      next:(val) => {
          if(val){
            this.getEmployee();
          }
      },
    });
  }
  updateemployee(data:any){
    const dialogRef = this.dialog.open(EmployeeDetailsComponent,{
      data,
    });
    dialogRef.afterClosed().subscribe({
      next:(val) => {
          if(val){
            this.getEmployee();
          }
      },
    });
  } 
}
 
 
