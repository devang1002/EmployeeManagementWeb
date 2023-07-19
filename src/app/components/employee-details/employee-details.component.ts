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


@Component({
  selector: 'app-employee-details',
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
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss']
})
export class EmployeeDetailsComponent implements OnInit {

  employeeForm = new FormGroup({


    id: new FormControl(null),
    firstName: new FormControl(null, Validators.required),
    middleName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    empCode: new FormControl(null, Validators.required),
    email: new FormControl(null, Validators.required),
    designation: new FormControl(null, Validators.required),
    mobile: new FormControl(null, Validators.required),
    gender: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    dob:new FormControl( '', Validators.required),
      doj:new FormControl('', Validators.required),
    emergencyContectNo: new FormControl(null, Validators.required),
    emergencyContectName: new FormControl(null, Validators.required),


  })


  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<EmployeeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  



  ngOnInit() {
    let startDate:any=new Date();
    this.employeeForm.patchValue(this.data);
  }


  onSubmit() {
    if (this.data) {
      console.log(this.employeeForm.value)
      this.apiService.updateEmployee(this.data.id, this.employeeForm.value)
        .subscribe({
          next: (result) => {
            alert("employee Updated")
            this.dialogRef.close(true)
          }
        })
    }
    else {
      console.log(this.employeeForm.value)
      this.apiService.addEmployee(this.employeeForm.value)
        .subscribe({
          next: (result) => {
            alert("employee Added Successfully")
            this.dialogRef.close(true)
          }
        })
    }
  }

  UpdateEmployee(employeeForm: any) {
    this.apiService.updateEmployee(this.route.snapshot.params['id'], this.employeeForm.value)
      .subscribe({
        next: (response) => {
          this.router.navigate(['employee-list'])
        }
      });
  }


}


