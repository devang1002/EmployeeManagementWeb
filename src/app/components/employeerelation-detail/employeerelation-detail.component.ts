import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employeerelation-detail',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule],
  templateUrl: './employeerelation-detail.component.html',
  styleUrls: ['./employeerelation-detail.component.scss']
})
export class EmployeeRelationDetailComponent implements OnInit {
  employee:any []=[]

  employeerelationForm = new FormGroup({

    id: new FormControl(null),
    relation: new FormControl(null,Validators.required),
  })
  


  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<EmployeeRelationDetailComponent>,
    //  private toaster:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  //public addresstypeForm:FormGroup;



  ngOnInit() {
    this.employeerelationForm.patchValue(this.data);

    this.apiService.getAllEmployee()
    .subscribe({
      next:result =>{
        this.employee=result;
      }
    })
  }

  // public hasError = (controlName: string, errorName: string) =>{
  //   return this.employeeForm.controls[controlName].hasError(errorName);
  // }


  onSubmit() {
    if (this.data) {
      console.log(this.employeerelationForm.value)
      this.apiService.updateEmployeeRelation(this.data.id, this.employeerelationForm.value)
        .subscribe({
          next: (result) => {
            alert("user Updated")
            this.dialogRef.close(true)
          }
        })
    }
    else {
      console.log(this.employeerelationForm.value)
      this.apiService.addEmployeeRelation(this.employeerelationForm.value)
        .subscribe({
          next: (result) => {
            alert("user Added Successfully")
            this.dialogRef.close(true)
          }
        })
    }
  }

  UpdateEmployeeRelation(employeerelationForm: any) {
    this.apiService.updateEmployeeRelation(this.route.snapshot.params['id'], this.employeerelationForm.value)
      .subscribe({
        next: (response) => {
          this.router.navigate(['employeerelation-list'])
        }
      });
  }


}


